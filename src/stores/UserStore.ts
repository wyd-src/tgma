import { action, makeAutoObservable } from 'mobx'
import RootStore from './RootStore'

export default class UserStore {
  queryId: string = ''
  root: RootStore
  constructor(rootStore: RootStore) {
    this.root = rootStore
    makeAutoObservable(this, {
      setQueryId: action,
    })
  }

  setQueryId(queryId: string) {
    this.queryId = queryId
  }
}
