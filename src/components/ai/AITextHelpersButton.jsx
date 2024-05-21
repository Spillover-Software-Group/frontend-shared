import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react'

import { Icon } from '@/components/icons'
import AITextHelpers from './AITextHelpers'

function AITextHelpersButton ({ message, text, onOptionSelected, className, children }) {
  return (
    <Popover>
      <PopoverButton className={`sfs-border-0 sfs-bg-transparent sfs-cursor-pointer focus:sfs-outline-none ${className || ''}`} title='AI Helpers'>
        {(children || <Icon name='wand-magic-sparkles' className='sfs-text-gray-700' size='lg' />)}
      </PopoverButton>
      <Transition
        enter='sfs-transition sfs-ease-out sfs-duration-200'
        enterFrom='sfs-opacity-0 sfs-translate-y-1'
        enterTo='sfs-opacity-100 sfs-translate-y-0'
        leave='sfs-transition sfs-ease-in sfs-duration-150'
        leaveFrom='sfs-opacity-100 sfs-translate-y-0'
        leaveTo='sfs-opacity-0 sfs-translate-y-1'
      >
        <PopoverPanel anchor={{ to: 'bottom end', gap: '10px' }} className='sfs-w-80 sfs-max-h-96 sfs-border sfs-border-gray-300 sfs-border-solid sfs-rounded-md sfs-shadow-sm'>
          <AITextHelpers
            message={message}
            text={text}
            onOptionSelected={onOptionSelected}
          />
        </PopoverPanel>
      </Transition>
    </Popover>
  )
}

export default AITextHelpersButton
