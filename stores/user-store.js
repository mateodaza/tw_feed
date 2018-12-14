// IT IS NOT USED BUT ALREADY SET UP FOR FUTURE UPGRADES

import { observable, computed, action } from "mobx"

class User{
  constructor(){
    this.data = {}
  }
}

class UserStore {
  
  constructor() {
    this.setUser()
  }
  
  @action setUser() {
    this.currentUser = new User()
  }

}
export default UserStore