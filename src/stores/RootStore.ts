import ProductStore from './ProductStore'
import UserStore from './UserStore'

export default class RootStore {
  product: ProductStore
  user: UserStore
  constructor() {
    this.product = new ProductStore(this)
    this.user = new UserStore(this)
  }
}
