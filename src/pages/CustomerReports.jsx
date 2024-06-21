import { gql } from "@apollo/client";
import { useState } from "react";
import { DateFormatter, getLocalTimeZone } from "@internationalized/date";

import { LoadingSpinner } from "@/ui/LoadingSpinner";
import { BusinessSelect, useBusinessSelect } from "@/accounts/BusinessSelect";
import { LocationSelect, useLocationSelect } from "@/accounts/LocationSelect";
import { useAccountsQuery } from "@/hooks/useAccounts";
import { Section } from "@/ui/Section";
import { DateRangePicker } from "@/ui/DateRangePicker";
import { ExportButton } from "./ExportButton";
import {
  PresetDateRangeSelector,
  usePresetDateRangeSelector,
} from "@/ui/PresetDateRangeSelector";

const QUERY = gql`
  query ReportsEmbedURL(
    $businessId: GID!
    $locationId: GID
    $startDate: ISO8601Date
    $endDate: ISO8601Date
  ) {
    reportsEmbedUrl(
      businessId: $businessId
      locationId: $locationId
      startDate: $startDate
      endDate: $endDate
    )
  }
`;

export function CustomerReports({
  defaultBusinessId = null,
  showBusinessSelect = false,
}) {
  const { businessSelectProps, business } = useBusinessSelect({
    defaultBusinessId,
  });

  const { locationSelectProps, location } = useLocationSelect({
    locations: business?.locations || [],
  });

  const [dateRange, setDateRange] = useState(null);

  const { data } = useAccountsQuery(QUERY, {
    skip: !business || !dateRange,
    variables: {
      businessId: business?.id,
      locationId: location?.id,
      startDate: dateRange?.start.toString(),
      endDate: dateRange?.end.toString(),
    },
  });

  const reportsEmbedUrl = data?.reportsEmbedUrl;

  const { presetDateRangeProps, setSelectedPresetDateRange } =
    usePresetDateRangeSelector({
      defaultPreset: "last30Days",
      onChange: (preset, dateRange) => {
        if (preset === "custom") return;
        setDateRange(dateRange);
      },
    });

  const onDateRangeChange = (dateRange) => {
    setDateRange(dateRange);
    setSelectedPresetDateRange("custom");
  };

  const subtitle =
    dateRange &&
    new DateFormatter("en-US").formatRange(
      dateRange.start.toDate(getLocalTimeZone()),
      dateRange.end.toDate(getLocalTimeZone()),
    );

  return (
    <div className="sfs-customer-reports w-full h-full flex flex-col gap-8">
      <div className="sfs-customer-reports__header flex flex-row justify-between items-center">
        <div className="sfs-customer-reports__left flex flex-row gap-4 items-center">
          {showBusinessSelect && (
            <BusinessSelect {...businessSelectProps} ariaLabel="Business" />
          )}

          {business && (
            <LocationSelect
              {...locationSelectProps}
              isClearable
              ariaLabel="Location"
            />
          )}

          <div className="sfs-customer-reports__date-range flex flex-row items-center">
            <DateRangePicker
              ariaLabel="Date range"
              value={dateRange}
              onChange={onDateRangeChange}
            >
              <PresetDateRangeSelector
                {...presetDateRangeProps}
                ariaLabel="Preset Date Range"
                className="mb-4"
              />
            </DateRangePicker>
          </div>
        </div>

        <div className="sfs-customer-reports__right flex flex-row gap-4 items-center">
          <ExportButton
            business={business}
            location={location}
            dateRange={dateRange}
          />
        </div>
      </div>

      <Section
        title="Reports"
        subtitle={subtitle}
        className="sfs-customer-reports__content h-full w-full"
      >
        {reportsEmbedUrl ? (
          <iframe
            title="Reports"
            src={reportsEmbedUrl}
            className="sfs-customer-reports__iframe w-full h-[calc(100%_-_50px)] border-0"
          />
        ) : (
          <LoadingSpinner />
        )}
      </Section>
    </div>
  );
}
