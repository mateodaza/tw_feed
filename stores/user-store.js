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

  // async setCookieUser(cookie) {
  //   await localStore.set("USERSESSION", JSON.stringify(cookie));
  // }

  @action setUser() {
    this.currentUser = new User()
    // this.setCookieUser(user)
    // jsCookie.set('USERSESSION', JSON.stringify(user));
  }

  // @computed get ordersFetched() {
  //   if(this.currentUser && this.currentUser.orders){
  //     return true
  //   }else {
  //     return false
  //   }
  // }
}
export default UserStore