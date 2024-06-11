import { useState } from 'react'

import {
  endOfDay,
  endOfMonth,
  endOfWeek,
  endOfYear,
  startOfDay,
  startOfMonth,
  startOfWeek,
  startOfYear,
  sub
} from 'date-fns'

const OPTIONS_OBJ = {
  today: {
    id: 'today',
    name: 'Today'
  },
  thisWeek: {
    id: 'thisWeek',
    name: 'This Week'
  },
  thisMonth: {
    id: 'thisMonth',
    name: 'This Month'
  },
  thisYear: {
    id: 'thisYear',
    name: 'This Year'
  },
  yesterday: {
    id: 'yesterday',
    name: 'Yesterday'
  },
  previousWeek: {
    id: 'previousWeek',
    name: 'Previous Week'
  },
  previousMonth: {
    id: 'previousMonth',
    name: 'Previous Month'
  },
  previousYear: {
    id: 'previousYear',
    name: 'Previous Year'
  },
  last7Days: {
    id: 'last7Days',
    name: 'Last 7 Days'
  },
  last30Days: {
    id: 'last30Days',
    name: 'Last 30 Days'
  },
  last90Days: {
    id: 'last90Days',
    name: 'Last 90 Days'
  },
  last6Months: {
    id: 'last6Months',
    name: 'Last 6 Months'
  },
  last12Months: {
    id: 'last12Months',
    name: 'Last 12 Months'
  }
}

const OPTIONS = Object.values(OPTIONS_OBJ)

function optionIdToRange (now, optionId) {
  switch (optionId) {
    case 'today':
      return [startOfDay(now), endOfDay(now)]
    case 'thisWeek':
      return [startOfWeek(now), endOfWeek(now)]
    case 'thisMonth':
      return [startOfMonth(now), endOfMonth(now)]
    case 'thisYear':
      return [startOfYear(now), endOfYear(now)]
    case 'yesterday': {
      const yesterday = sub(now, { days: 1 })
      return [startOfDay(yesterday), endOfDay(yesterday)]
    }
    case 'previousWeek': {
      const previousWeek = sub(now, { weeks: 1 })
      return [startOfWeek(previousWeek), endOfWeek(previousWeek)]
    }
    case 'previousMonth': {
      const previousMonth = sub(now, { months: 1 })
      return [startOfMonth(previousMonth), endOfMonth(previousMonth)]
    }
    case 'previousYear': {
      const previousYear = sub(now, { years: 1 })
      return [startOfYear(previousYear), endOfYear(previousYear)]
    }
    case 'last7Days':
      return [sub(now, { days: 7 }), now]
    case 'last30Days':
      return [sub(now, { days: 30 }), now]
    case 'last90Days':
      return [sub(now, { days: 90 }), now]
    case 'last6Months':
      return [sub(now, { months: 6 }), now]
    case 'last12Months':
      return [sub(now, { months: 12 }), now]
    default:
      throw new Error(`Unknown optionId: ${optionId}`)
  }
}

function useFriendlyDateRanges ({ initial = OPTIONS_OBJ.last30Days, onSelect }) {
  const [now] = useState(() => new Date())
  const [selected, setSelected] = useState(initial)

  const obj = {
    friendlyDateRangesProps: {
      options: OPTIONS,
      selected,
      setSelected
    },
    setFriendlyDateRange: setSelected
  }

  if (selected) {
    obj.selectedFriendlyDateRange = {
      ...selected,
      range: optionIdToRange(now, selected.id)
    }
  }

  return obj
}

function FriendlyDateRanges ({ options, selected, setSelected, ...rest }) {
  return (
    <select
      value={selected?.id || ''}
      onChange={e => setSelected(OPTIONS_OBJ[e.target.value])}
      className='sfs-w-full sfs-flex sfs-rounded-md sfs-border sfs-border-gray-300 sfs-bg-white sfs-shadow-sm sfs-py-1 sfs-px-3 sfs-text-gray-900'
      {...rest}
    >
      <option value=''>Custom Range</option>
      {options.map(option => (
        <option key={option.id} value={option.id}>{option.name}</option>
      ))}
    </select>
  )
}

const friendlyDateRanges = OPTIONS_OBJ

export { useFriendlyDateRanges, FriendlyDateRanges, friendlyDateRanges }
