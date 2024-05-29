import { useState } from 'react'
import { Popover, Transition } from '@headlessui/react'

import { Icon } from '@/components/icons'
import AITextHelpers from './AITextHelpers'

function AITextHelpersButton ({ message, text, onOptionSelected, className, children, tools }) {
  // Ali doesn't like that the popover closes when the user clicks outside of it,
  // since there's no way to disable that behavior we need to control the state of the popover ourselves.
  const [isOpen, setIsOpen] = useState(false)

  const togglePopover = () => setIsOpen(!isOpen)
  const closePopover = () => setIsOpen(false)

  return (
    <Popover>
      {/* <Popover.Button className={`sfs-border-0 sfs-bg-transparent sfs-cursor-pointer focus:sfs-outline-none ${className || ''}`} title='AI Helpers'>
        {(children || <Icon name='wand-magic-sparkles' className='sfs-text-gray-700' size='lg' />)}
      </Popover.Button> */}
      <a className={`sfs-border-0 sfs-bg-transparent sfs-cursor-pointer focus:sfs-outline-none ${className || ''}`} title='AI Helpers' onClick={togglePopover}>
        {(children || <Icon name='wand-magic-sparkles' className='sfs-text-gray-700' size='lg' />)}
      </a>
      <Transition
        show={isOpen}
        enter='sfs-transition sfs-ease-out sfs-duration-200'
        enterFrom='sfs-opacity-0 sfs-translate-y-1'
        enterTo='sfs-opacity-100 sfs-translate-y-0'
        leave='sfs-transition sfs-ease-in sfs-duration-150'
        leaveFrom='sfs-opacity-100 sfs-translate-y-0'
        leaveTo='sfs-opacity-0 sfs-translate-y-1'
      >
        <Popover.Panel static className='sfs-absolute sfs-z-30 sfs-w-80 sfs-max-h-96 sfs-border sfs-border-gray-300 sfs-border-solid sfs-rounded-md sfs-shadow-sm sfs-bg-white sfs-overflow-y-auto sfs-right-4 sfs-mt-2'>
          <AITextHelpers
            tools={tools}
            message={message}
            text={text}
            onOptionSelected={onOptionSelected}
            onCloseButtonClick={closePopover}
            modal
          />
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default AITextHelpersButton
