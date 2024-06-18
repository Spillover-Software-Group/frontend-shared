import { useEffect, useState } from "react";
import { gql } from "@apollo/client";

import { ComboBox, ComboBoxItem } from "@/ui/ComboBox";
import { useAccountsQuery } from "@/hooks/useAccounts";

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
`;

export function useBusinessSelect({ defaultBusinessId = null } = {}) {
  const [selectedId, setSelectedId] = useState(defaultBusinessId);

  const { data } = useAccountsQuery(QUERY);

  const businesses = data?.allowedBusinesses || [];
  const business = businesses.find((b) => b.id === selectedId);

  useEffect(() => {
    if (!selectedId && businesses.length) {
      setSelectedId(businesses[0].id);
    }
  }, [businesses, selectedId]);

  return {
    business,
    businessSelectProps: {
      businesses,
      selectedId,
      onSelectionChange: setSelectedId,
    },
  };
}

export function BusinessSelect({
  businesses = [],
  selectedId = null,
  onSelectionChange,
}) {
  return (
    <ComboBox
      placeholder="Select a business"
      items={businesses}
      selectedKey={selectedId}
      onSelectionChange={onSelectionChange}
    >
      {(business) => <ComboBoxItem>{business.name}</ComboBoxItem>}
    </ComboBox>
  );
}
