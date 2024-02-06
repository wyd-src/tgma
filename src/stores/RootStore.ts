import ActivityStore from './ActivityStore'
import UserStore from './UserStore'

export default class RootStore {
  user: UserStore
  activity: ActivityStore
  constructor() {
    this.user = new UserStore(this)
    this.activity = new ActivityStore(this)
  }
}
