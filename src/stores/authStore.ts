import { derived, writable } from 'svelte/store'
import { firebaseAuth } from '../firebase'

const anonymousUser = {
  uid: '',
  email: '',
  displayName: '',
  photoURL: '',
  isAnonymous: true
}

function createUser() {
  const { subscribe, set } = writable({ ...anonymousUser, loginComplete: false })

  firebaseAuth.subscribe((fbAuth) => {
    fbAuth.onAuthStateChanged((user) => {
      console.log('auth state changed', user)
      if (user) {
        set({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          isAnonymous: user.isAnonymous,
          loginComplete: true
        })
      } else {
        set({ ...anonymousUser, loginComplete: true })
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
