import { gql } from '@apollo/client'

import { useAccountsQuery } from './useAccounts'

const QUERY = gql`
  query ReportsEmbedUrl(
    $businessId: GID!
    $locationId: GID
    $startDate: ISO8601Date
    $endDate: ISO8601Date
  ) {
    reportsEmbedUrl(
      businessId: $businessId,
      locationId: $locationId,
      startDate: $startDate,
      endDate: $endDate
    )
  }
`

function useReports({ businessId, locationId, startDate, endDate }) {
  const { data, loading, error } = useAccountsQuery(QUERY, {
    variables: { businessId, locationId, startDate, endDate },
    skip: !businessId
  })

  return {
    reportsEmbedURL: data?.reportsEmbedUrl,
    loading,
    error
  }
}

export default useReports
