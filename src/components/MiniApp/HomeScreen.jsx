import Screen from './Screen'
import { Icon } from '@/components/icons'
import { useMiniApp } from './useMiniApp'

function HomeScreen ({ title, icon, children }) {
  const { setCurrentScreen } = useMiniApp()

  return (
    <Screen title={title} icon={icon} noBack>
      <div className='sfs-w-full sfs-h-full sfs-box-border sfs-flex sfs-flex-col sfs-gap-2 sfs-px-2'>
        {children.map((child, index) => (
          <div
            key={index}
            onClick={() => setCurrentScreen(child)}
            className='sfs-flex sfs-flex-row sfs-items-center sfs-gap-2 sfs-p-3 sfs-text-md sfs-bg-gray-200 sfs-rounded-md sfs-cursor-pointer sfs-transition sfs-duration-200 hover:sfs-bg-gray-300'
          >
            <Icon icon={child.props.icon} className='sfs-w-4' />
            <p className='sfs-m-0'>{child.props.title}</p>
          </div>
        ))}
      </div>
    </Screen>
  )
}

export default HomeScreen
