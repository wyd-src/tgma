import { action, makeAutoObservable } from 'mobx'
import RootStore from './RootStore'

export type TPage = 'home' | 'suggest' | 'bookmarks' | 'profile'

export default class GeneralStore {
  page: TPage = 'home'
  root: RootStore
  constructor(rootStore: RootStore) {
    this.root = rootStore
    makeAutoObservable(this, {
      setPage: action,
    })
  }

  setPage(page: TPage) {
    this.page = page
  }

  get currentPage(): TPage {
    return this.page
  }
}
