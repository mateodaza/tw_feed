// IT IS NOT USED BUT ALREADY SET UP FOR FUTURE UPGRADES
import UserStore from './stores/user-store'

class RootStore {
  constructor() {
    this.userStore = new UserStore()
  }
}

export function initializeStore () {
  return new RootStore()
}