import { ReactNode, useContext, useState } from 'react'
import StoreContext from './StoreContext'
import RootStore from './RootStore'

export function StoreProvider({ children }: { children: ReactNode }) {
  const [rootStore] = useState(() => new RootStore())

  return <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
}

export function useStore() {
  const context = useContext(StoreContext)
  if (context === undefined) {
    throw new Error('useStore must be used within StoreProvider')
  }
  return context
}
