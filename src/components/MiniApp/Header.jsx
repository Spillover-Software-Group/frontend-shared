import { Icon } from '@/components/icons'
import { useMiniApp } from './useMiniApp'

function Header ({ title, icon, noBack }) {
  const { goHome } = useMiniApp()

  return (
    <header className='sfs-w-full sfs-box-border sfs-flex sfs-flex-row sfs-items-center'>
      {!noBack && (
        <div onClick={goHome} className='sfs-h-10 sfs-px-4 sfs-flex sfs-flex-row sfs-items-center sfs-cursor-pointer hover:sfs-bg-gray-200 sfs-transition sfs-duration-200'>
          <Icon icon='chevron-left' />
        </div>
      )}

      <div className='sfs-flex sfs-flex-grow sfs-justify-center sfs-gap-1 sfs-py-3 sfs-text-gray-800'>
        <Icon icon={icon} />
        <p className='sfs-m-0 sfs-font-semibold'>{title}</p>
      </div>
    </header>
  )
}

export default Header
