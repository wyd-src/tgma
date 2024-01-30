import { createContext } from 'react'
import RootStore from './RootStore'

// eslint-disable-next-line @typescript-eslint/naming-convention
const StoreContext = createContext<RootStore | null>(null)

export default StoreContext
