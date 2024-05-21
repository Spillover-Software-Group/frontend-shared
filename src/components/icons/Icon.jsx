import { forwardRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Using the same API as FontAwesome macro `icon` in case
// we're able to use it in the future (not easy to use with Vite right now)
const Icon = forwardRef(function Icon ({ name, family = 'classic', style = 'solid', ...props }, ref) {
  const icon = `fa-${name} fa-${family} fa-${style}`

  const { onClick } = props

  return <FontAwesomeIcon icon={icon} className={onClick ? 'sfs-cursor-pointer' : ''} ref={ref} {...props} />
})

export default Icon
