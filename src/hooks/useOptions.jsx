import { createContext, useContext } from 'react'

const context = createContext({})

const useOptions = () => useContext(context)

function OptionsProvider ({ children, options = {} }) {
  options.isProd = options.mode === 'production'
  options.isDev = !options.isProd

  return <context.Provider value={options}>{children}</context.Provider>
}

export default useOptions
export { OptionsProvider }
