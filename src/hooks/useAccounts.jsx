import createUploadLink from 'apollo-upload-client/createUploadLink.mjs'
import { createContext, useContext, useEffect, useState } from 'react'
import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client/core'
import { onError } from '@apollo/client/link/error'
import { useMutation, useQuery } from '@apollo/client/react'

import config from '@/config'

const cache = new InMemoryCache()

async function setupClient({ mode }) {
  const uri = mode === 'development' ? config.accountsGraphqlDevEndpoint : config.accountsGraphqlEndpoint

  // This replaces `createHttpLink` to allow multipart (file upload) requests.
  const httpLink = createUploadLink({ uri })

  const errorLink = onError(({ networkError }) => {
    // if (!networkError) return

    // if (networkError.statusCode === 401) {
    // }
  })

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, httpLink]),
    cache
  })

  return client
}

const AccountsContext = createContext({
  apolloClient: null
})

function AccountsProvider({ children, mode }) {
  const [client, setClient] = useState(null)

  useEffect(() => {
    async function init() {
      setClient(await setupClient({ mode }))
    }

    init().catch(console.error)
  }, [mode])

  if (!client) return <h2>Initializing...</h2>

  return (
    <AccountsContext.Provider value={{ client }}>
      {children}
    </AccountsContext.Provider>
  )
}

function useAccounts() {
  const context = useContext(AccountsContext)

  if (!context) {
    throw new Error('useAccounts must be used within an AccountsProvider')
  }

  return context
}

function useAccountsMutation(mutation, options = {}) {
  const { client } = useAccounts()
  return useMutation(mutation, { ...options, client })
}

function useAccountsQuery(query, options = {}) {
  const { client } = useAccounts()
  return useQuery(query, { ...options, client })
}

export { AccountsProvider, useAccounts, useAccountsQuery, useAccountsMutation }
