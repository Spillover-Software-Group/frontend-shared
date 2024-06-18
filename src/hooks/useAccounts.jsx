import createUploadLink from "apollo-upload-client/createUploadLink.mjs";
import { createContext, useContext, useEffect, useState } from "react";
import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  Observable,
} from "@apollo/client/core";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { useQuery, useMutation } from "@apollo/client/react";

import { getAccessToken, refreshAccessToken } from "@/hooks/useAuth";
import config from "@/config";

const cache = new InMemoryCache();

async function setupClient({ mode, ownerId }) {
  const uri =
    mode === "development"
      ? config.accountsGraphqlDevEndpoint
      : config.accountsGraphqlEndpoint;

  // This replaces `createHttpLink` to allow multipart (file upload) requests.
  const httpLink = createUploadLink({ uri });

  const authLink = setContext((_, { headers }) => {
    const accessToken = getAccessToken({ ownerId });
    const authorization = accessToken ? `Bearer ${accessToken}` : "";

    return {
      headers: {
        ...headers,
        accept: "application/json", // Necessary to get a 401 instead of a redirect on auth errors.
        authorization,
      },
    };
  });

  const errorLink = onError(({ networkError, operation, forward }) => {
    if (!networkError) return;

    // Re-authenticate on auth errors.
    if (networkError.statusCode === 401) {
      console.log("Re-authenticating...");

      // The onError callback can't be async/return a promise,
      // it must return an Observable.
      // SEE: https://github.com/apollographql/apollo-link/issues/646
      return new Observable((observer) => {
        refreshAccessToken({ mode, ownerId })
          .then((newToken) => {
            operation.setContext(({ headers }) => ({
              headers: {
                ...headers,
                authorization: newToken ? `Accounts ${newToken}` : "",
              },
            }));

            const subscriber = {
              next: observer.next.bind(observer),
              error: observer.error.bind(observer),
              complete: observer.complete.bind(observer),
            };

            forward(operation).subscribe(subscriber);
          })
          .catch(observer.error.bind(observer));
      });
    }
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, authLink, httpLink]),
    cache,
  });

  return client;
}

const AccountsContext = createContext({
  apolloClient: null,
});

function AccountsProvider({ children, mode, ownerId }) {
  const [client, setClient] = useState(null);

  useEffect(() => {
    async function init() {
      setClient(await setupClient({ mode, ownerId }));
    }

    init().catch(console.error);
  }, [mode, ownerId]);

  if (!client) return <h2>Initializing...</h2>;

  return (
    <AccountsContext.Provider value={{ client }}>
      {children}
    </AccountsContext.Provider>
  );
}

function useAccounts() {
  const context = useContext(AccountsContext);

  if (!context) {
    throw new Error("useAccounts must be used within an AccountsProvider");
  }

  return context;
}

function useAccountsMutation(mutation, options = {}) {
  const { client } = useAccounts();
  return useMutation(mutation, { ...options, client });
}

function useAccountsQuery(query, options = {}) {
  const { client } = useAccounts();
  return useQuery(query, { ...options, client });
}

export { AccountsProvider, useAccounts, useAccountsQuery, useAccountsMutation };
