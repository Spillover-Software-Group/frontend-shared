import Header from './Header'

function Screen ({ title, icon, noBack, children }) {
  return (
    <>
      <Header title={title} icon={icon} noBack={noBack} />

      <main className='sfs-box-border sfs-h-full sfs-grow sfs-w-full sfs-overflow-y-auto'>
        {children}
      </main>
    </>
  )
}

export default Screen
