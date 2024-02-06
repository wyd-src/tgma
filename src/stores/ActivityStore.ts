import { action, makeAutoObservable } from 'mobx'
import RootStore from './RootStore'
import { IActivity, IActivityResult } from '~/components/Home/HomeActivity'

export default class ActivityStore {
  myActivities: IActivityResult = {
    items: [] as IActivity[],
    offset: 0,
    limit: 50,
    total: 0,
  }
  activities: IActivity[] = []
  root: RootStore
  constructor(rootStore: RootStore) {
    this.root = rootStore
    makeAutoObservable(this, {
      setActivites: action,
    })
  }

  setActivites(activities: IActivity[]) {
    this.activities = activities
  }

  get activityItems(): IActivity[] {
    return this.activities
  }
}
