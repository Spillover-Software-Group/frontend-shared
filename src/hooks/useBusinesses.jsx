import { gql } from '@apollo/client'

import { useAccountsQuery } from './useAccounts'

const QUERY = gql`
  query ListBusinesses {
    allowedBusinesses {
      id
      name
      senalysisId
      locations {
        id
        name
      }
    }
  }
`

function useBusinesses () {
  const { data, loading, error } = useAccountsQuery(QUERY)

  return {
    businesses: data?.allowedBusinesses || [],
    loading,
    error
  }
}

export default useBusinesses
