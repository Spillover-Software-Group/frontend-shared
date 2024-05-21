import { forwardRef } from 'react'
// import { Link } from "react-router-dom";

import { Icon } from '@/components/icons'

const baseClasses = [
  'sfs-flex',
  'sfs-items-center',
  'sfs-justify-center',
  'sfs-gap-2',
  'sfs-cursor-pointer',
  'sfs-transition',
  'sfs-ease-in-out',
  'sfs-duration-150',
  'sfs-border',
  'sfs-border-transparent',
  'sfs-shadow-sm',
  'sfs-font-medium',
  'sfs-hover:shadow-md',
  'sfs-focus:outline-none'
]

const contextClasses = {
  primary: ['sfs-text-white', 'sfs-bg-spillover-darkRed', 'sfs-hover:bg-spillover-brandRed'],
  secondary: ['sfs-text-slate-700', 'sfs-bg-gray-200', 'sfs-hover:bg-gray-300'],
  danger: ['sfs-text-white', 'sfs-bg-red-500', 'sfs-hover:bg-red-600'],
  warning: ['sfs-text-white', 'sfs-bg-yellow-500', 'sfs-hover:bg-yellow-600'],
  success: ['sfs-text-white', 'sfs-bg-green-500', 'sfs-hover:bg-green-600'],
  info: ['sfs-text-white', 'sfs-bg-blue-500', 'sfs-hover:bg-blue-600']
}

const sizeClasses = {
  xs: ['sfs-px-1', 'sfs-py-0.5', 'sfs-text-xs', 'sfs-rounded'],
  sm: ['sfs-px-2', 'sfs-py-1', 'sfs-text-sm', 'sfs-rounded'],
  md: ['sfs-px-3', 'sfs-py-2', 'sfs-text-sm', 'sfs-rounded-md'],
  lg: ['sfs-px-3', 'sfs-py-2', 'sfs-text-lg', 'sfs-rounded-lg']
}

const disabledClasses = ['sfs-cursor-not-allowed', 'sfs-opacity-50']

function buildClassName (disabled, context, size, customClasses) {
  const classNames = [...baseClasses]

  classNames.push(...contextClasses[context])
  classNames.push(...sizeClasses[size])
  if (disabled) classNames.push(...disabledClasses)
  if (customClasses) classNames.push(customClasses)

  return classNames.join(' ')
}

const Button = forwardRef(function Button ({
  children,
  onClick,
  disabled,
  // to, // If provided, will render a Link instead of a button.
  type = 'button', // Button type (button, submit, reset)
  context = 'primary', // Button context (primary, secondary, danger, warning, success, info)
  size = 'md', // Button size (xs, sm, md, lg)
  icon, // Icon name or object
  loading, // If true, will render a loading spinner instead of the icon.
  className, // Custom classes. Tip: "flex-row-reverse" to reverse icon and text.
  ...props // Any other props to pass to the button
}, ref) {
  const Tag = 'button'

  // if (to) {
  //   Tag = Link;
  // } else {
  // Button only props
  props.disabled = disabled || loading
  props.type = type
  // }

  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault()
      return
    }

    if (onClick) onClick(e)
  }

  const classNames = buildClassName(disabled, context, size, className)

  let iconProps

  if (loading) {
    iconProps = { name: 'spinner', spin: true }
  } else {
    iconProps = typeof icon === 'string' ? { name: icon } : icon
  }

  return (
    <Tag ref={ref} onClick={handleClick} className={classNames} {...props}>
      {icon && <Icon {...iconProps} />}
      {children}
    </Tag>
  )
})

export default Button
