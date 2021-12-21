import { writable, derived } from "svelte/store"

export const uid = writable('')
export const isAnonymous = derived(uid, ($uid) => $uid === '')

/* import { writable } from 'svelte/store'
import type { User } from 'firebase/auth'
import { useFirebase } from '../firebase'

const auth = writable({
  uid: '',
  displayName: '',
  loggedIn: false
})

const { firebaseApp } = useFirebase()

export function handleLogin (user?:User): void {
  if (firebaseApp) {
  if (!user.isAnonymous) {
    auth.set({
      uid: user.uid,
      displayName: user.displayName,
      loggedIn: true
    })
  } else {
    auth.set({
      uid: '',
      displayName: '',
      loggedIn: false
    })
  }}
}
 */