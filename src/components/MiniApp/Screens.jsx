import HomeScreen from './HomeScreen'
import { useMiniApp } from './useMiniApp'

function Screens ({ title, icon, children }) {
  const { currentScreen } = useMiniApp()

  return (
    <div className='sfs-w-full sfs-h-full sfs-flex sfs-flex-col sfs-pb-2 sfs-box-border sfs-text-gray-800 sfs-bg-white'>
      {currentScreen || (
        <HomeScreen title={title} icon={icon}>
          {children}
        </HomeScreen>
      )}
    </div>
  )
}

export default Screens
