import GeneralStore from './GeneralStore'
import UserStore from './UserStore'

export default class RootStore {
  user: UserStore
  general: GeneralStore
  constructor() {
    this.user = new UserStore(this)
    this.general = new GeneralStore(this)
  }
}
