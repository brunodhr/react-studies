import * as React from 'react'

export default useValue => {
  const Context = React.createContext()

  const Provider = ({ children }) => {
    const value = useValue()

    return <Context.Provider value={value}>{children}</Context.Provider>
  }

  const useContext = () => React.useContext(Context)

  useContext.Context = Context
  useContext.Provider = Provider

  return useContext
}
