import { action, makeAutoObservable, runInAction } from 'mobx'
import RootStore from './RootStore'

export type TPage = 'home' | 'suggest' | 'bookmarks' | 'profile'
export type TLanguage = 'en' | 'ru'

export default class GeneralStore {
  page: TPage = 'home'
  language: TLanguage = 'en'
  withLocation: boolean = false
  root: RootStore
  constructor(rootStore: RootStore) {
    this.root = rootStore
    makeAutoObservable(this, {
      setPage: action,
      setLanguage: action,
      setWithLocation: action,
    })
  }

  setPage(page: TPage) {
    this.page = page
  }

  setLanguage(language: TLanguage) {
    this.language = language
  }

  setWithLocation(withLocation: boolean) {
    this.withLocation = withLocation
  }

  get currentPage(): TPage {
    return this.page
  }
}
