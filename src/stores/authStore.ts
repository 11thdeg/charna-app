import { derived, writable } from 'svelte/store'
import { firebaseAuth } from '../firebase'
import type { User } from 'firebase/auth'

const anonymousUser = {
  uid: '',
  email: '',
  displayName: '',
  photoURL: '',
  isAnonymous: true
}

class AppUser {
  uid = ''
  email = ''
  displayName = ''
  photoURL = ''
  isAnonymous = true
  loginComplete = false

  constructor(user?: User) {
    if (user) {
      this.uid = user.uid
      this.email = user.email
      this.displayName = user.displayName
      this.photoURL = user.photoURL
      this.isAnonymous = user.isAnonymous
    }
  }
}

function createUser() {
  const { subscribe, set } = writable({ ...anonymousUser, loginComplete: false })

  firebaseAuth.subscribe((fbAuth) => {
    fbAuth.onAuthStateChanged((user) => {
      console.log('auth state changed', user)
      if (user) {
        const au = new AppUser(user)
        au.loginComplete = true
        set(au)
      } else {
        const au = new AppUser()
        au.loginComplete = true
        set(au)
      }
    })
  })

  return {
    subscribe
  }
}

export const user = createUser()
export const loginComplete = derived(user, ($user) => $user.loginComplete)
export const isAnonymous = derived(user, ($user) => $user.isAnonymous)
export const uid = derived(user, ($user) => $user.uid)
