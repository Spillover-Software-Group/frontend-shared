import { useEffect, useState } from 'react'
import { formatISO } from 'date-fns'

import useReports from '@/hooks/useReports'
import useBusinesses from '@/hooks/useBusinesses'
import Selector from '@/components/Selector'
import { Button } from '@/components/buttons'

import {
  friendlyDateRanges,
  useFriendlyDateRanges,
  FriendlyDateRanges
} from '@/components/FriendlyDateRanges'
import FormattedDate from '../FormattedDate'

import { parseDate } from '@internationalized/date'

import {
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarHeading,
  RangeCalendar
} from '@/components/ui/calendar'
import {
  DatePickerContent,
  DateRangePicker,
  DateRangePickerButton
} from '@/components/ui/date-picker'

function CustomerReport({
  defaultBusinessId = null,
  defaultLocationId = null,
  showBusinessSelector = false
}) {
  const { businesses, loading, error } = useBusinesses()
  const disabled = loading || error

  const [selectedBusiness, setSelectedBusiness] = useState(null)
  const [selectedLocation, setSelectedLocation] = useState(null)
  const locations = selectedBusiness?.locations || []

  const {
    friendlyDateRangesProps,
    selectedFriendlyDateRange,
    setFriendlyDateRange
  } = useFriendlyDateRanges({
    initial: friendlyDateRanges.last30Days
  })

  const [dateRange, setDateRange] = useState(() => ({
    start: parseDate(formatISO(selectedFriendlyDateRange.range[0], { representation: 'date' })),
    end: parseDate(formatISO(selectedFriendlyDateRange.range[1], { representation: 'date' }))
  }))

  console.log('dateRange', dateRange.start.toString(), dateRange.end.toString())

  const { reportsEmbedURL } = useReports({
    businessId: selectedBusiness?.id || defaultBusinessId,
    locationId: selectedLocation?.id,
    startDate: dateRange.start.toString(),
    endDate: dateRange.end.toString()
  })

  const onBusinessChange = (business) => {
    setSelectedBusiness(business)
    setSelectedLocation(null)
  }

  const onDateChange = (newDateRange) => {
    console.log('onDateChange', newDateRange)
    setDateRange(newDateRange)
    setFriendlyDateRange(null)
  }

  return (
    <div className='sfs-flex sfs-flex-col sfs-gap-6 sfs-h-full'>
      <div className='sfs-flex sfs-flex-row sfs-gap-4'>
        {showBusinessSelector && (
          <Selector
            options={businesses}
            defaultValue={defaultBusinessId}
            value={selectedBusiness}
            onChange={onBusinessChange}
            disabled={disabled}
            selectFirst
          />
        )}

        <Selector
          options={locations}
          defaultValue={defaultLocationId}
          value={selectedLocation}
          onChange={setSelectedLocation}
          disabled={disabled}
          clearable
        />

        <DateRangePicker
          aria-label='Select Date'
          shouldCloseOnSelect={false}
          value={dateRange}
          onChange={onDateChange}
        >
          <DateRangePickerButton date={dateRange} />
          <DatePickerContent
            className='sm:sfs-flex-col sm:sfs-space-x-0 sm:sfs-space-y-1'
            popoverClassName='sfs-p-2'
          >
            <FriendlyDateRanges {...friendlyDateRangesProps} />
            <RangeCalendar pageBehavior='visible'>
              <CalendarHeading />
              <CalendarGrid>
                <CalendarGridHeader>
                  {(day) => <CalendarHeaderCell>{day}</CalendarHeaderCell>}
                </CalendarGridHeader>
                <CalendarGridBody>
                  {(date) => (
                    <>
                      <CalendarCell date={date} />
                    </>
                  )}
                </CalendarGridBody>
              </CalendarGrid>
            </RangeCalendar>
          </DatePickerContent>
        </DateRangePicker>

        <Button context='primary' icon='download' onClick={() => { }} />
      </div>

      {selectedFriendlyDateRange && (
        <div className='sfs-text-gray-600 sfs-text-sm'>
          Data from <FormattedDate date={selectedFriendlyDateRange.range[0]} format='PPPP' className='sfs-font-semibold' /> to <FormattedDate date={selectedFriendlyDateRange.range[1]} format='PPPP' className='sfs-font-semibold' />
        </div>
      )}

      <div className='sfs-h-full sfs-border sfs-border-gray-200 sfs-border-solid sfs-rounded-md sfs-shadow-inner sfs-pt-4'>
        <iframe
          src={reportsEmbedURL}
          className='sfs-border-0 sfs-w-full sfs-h-full'
        />
      </div>
    </div>
  )
}

export default CustomerReport
