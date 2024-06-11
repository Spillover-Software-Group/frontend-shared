import { Fragment, useEffect, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'

import { Icon } from '@/components/icons'

function filterByName (options, query) {
  if (!query) return options
  if (query === '') return options

  return options.filter(option => option.name.toLowerCase().includes(query.toLowerCase()))
}

function Selector ({
  options,
  value,
  defaultValue,
  disabled,
  onChange,
  selectFirst = false,
  clearable = false,
  by = 'id',
  filter = filterByName,
  displayValue = (option) => option?.name || ''
}) {
  const [query, setQuery] = useState('')
  const defaultOption = defaultValue ? options.find(option => option[by] === defaultValue) : null

  // Set default value on first render
  useEffect(() => {
    if (value) return
    if (options.length === 0) return
    if (defaultOption) onChange(defaultOption)
  }, [defaultOption])

  useEffect(() => {
    if (selectFirst && options.length > 0) onChange(options[0])
  }, [selectFirst, options])

  const filteredOptions = filter(options, query)

  return (
    <Combobox value={value} by={by} onChange={onChange} disabled={disabled}>
      <div className='sfs-relative sfs-w-full'>
        <div className='sfs-flex sfs-flex-row sfs-gap-2 sfs-box-border sfs-w-full sfs-overflow-hidden sfs-rounded-md sfs-border sfs-border-solid sfs-border-gray-300 sfs-bg-white sfs-shadow-sm sfs-px-3'>
          <Combobox.Input
            onChange={e => setQuery(e.target.value)}
            displayValue={displayValue}
            className='sfs-flex sfs-grow sfs-border-none sfs-py-3 sfs-text-gray-900 focus:sfs-outline-none focus:sfs-ring-0'
          />
          {clearable && value && (
            <button type='button' onClick={() => onChange(null)} className='sfs-flex sfs-items-center sfs-text-gray-600 sfs-bg-white sfs-border-none sfs-cursor-pointer sfs-p-0'>
              <Icon name='xmark' aria-hidden />
            </button>
          )}
          <Combobox.Button className='sfs-flex sfs-items-center sfs-text-gray-600 sfs-bg-white sfs-border-none sfs-cursor-pointer sfs-p-0'>
            <Icon name='sort' aria-hidden />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave='sfs-transition sfs-ease-in sfs-duration-100'
          leaveFrom='sfs-opacity-100'
          leaveTo='sfs-opacity-0'
          afterLeave={() => setQuery('')}
        >
          <Combobox.Options className='sfs-list-none sfs-absolute sfs-mt-1 sfs-max-h-60 sfs-w-full sfs-overflow-auto sfs-rounded-md sfs-bg-white sfs-py-1 sfs-px-0 sfs-text-base sfs-shadow-lg sfs-ring-1 sfs-ring-black/5 focus:sfs-outline-none sfs-sm:text-sm'>
            {filteredOptions.length === 0 && query !== ''
              ? (
                <div className='sfs-relative sfs-cursor-default sfs-select-none sfs-px-4 sfs-py-2 sfs-text-gray-700'>
                  No results found
                </div>
                )
              : (
                  filteredOptions.map(option => (
                  <Combobox.Option
                    key={option[by]}
                    value={option}
                    className={({ active }) => `sfs-relative sfs-cursor-default sfs-select-none sfs-py-2 sfs-pl-10 sfs-pr-4 ${active ? 'sfs-bg-spillover-darkRed sfs-text-white' : 'sfs-text-gray-900'
                      }`}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`sfs-block sfs-truncate ${selected ? 'sfs-font-medium' : 'sfs-font-normal'
                            }`}
                        >
                          {option.name}
                        </span>
                        {selected
                          ? (
                            <span
                              className={`sfs-absolute sfs-inset-y-0 sfs-left-0 sfs-flex sfs-items-center sfs-pl-3 ${active ? 'sfs-text-white' : 'sfs-text-spillover-darkRed'
                                }`}
                            >
                              <Icon name='check' aria-hidden />
                            </span>
                            )
                          : null}
                      </>
                    )}
                  </Combobox.Option>
                  ))
                )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  )
}

export default Selector
