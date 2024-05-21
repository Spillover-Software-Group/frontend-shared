function Option ({ option, onClick }) {
  const handleClick = () => {
    if (onClick) onClick(option)
  }

  return (
    <div className={`sfs-p-3 sfs-bg-gray-100 sfs-rounded-md sfs-text-gray-600 hover:sfs-bg-gray-200 sfs-transition sfs-duration-200 sfs-text-sm ${onClick && 'sfs-cursor-pointer'} sfs-whitespace-pre-line`} onClick={handleClick}>
      {option}
    </div>
  )
}

export default Option
