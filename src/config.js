const config = {
  isProd: import.meta.env.PROD,
  isDev: import.meta.env.DEV,
  ssoUrl: 'https://media-library-api.spillover.com/sso',
  ssoDevUrl: 'http://localhost:3030/sso',
  engageGraphqlEndpoint: 'https://rails-admin.spillover.com/graphql',
  engageGraphqlDevEndpoint: 'http://localhost:8080/graphql',
  accountsGraphqlEndpoint: 'https://accounts-api.spillover.com/graphql',
  accountsGraphqlDevEndpoint: 'http://localhost:3000/graphql'
}

export default config
