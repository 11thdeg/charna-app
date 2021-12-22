import { get, derived, writable } from 'svelte/store'
import { firebaseAuth, firebaseFirestore } from '../firebase'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import type { DocumentData } from 'firebase/firestore'
import type { User } from 'firebase/auth'

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

  public toFirebaseDocument (): DocumentData {
    return {
      uid: this.uid,
      email: this.email,
      displayName: this.displayName,
      photoURL: this.photoURL
    }
  }
}

const fb = get(firebaseFirestore)

/**
 * Synchronize data to Firebase
 * 
 * @param user AppUser instance of a logged in user
 */
async function syncFirebaseUser (user: AppUser) {
  if (!user.uid) throw new Error('User has no uid')
  const docRef = doc(fb, 'accounts', user.uid)
  // Overwrite existing data for account root object based on the provider data.
  // This is required for administration tools and content moderation.
  // The object will be created if it does not exist.
  await setDoc(docRef, 
    {
      ...user.toFirebaseDocument(),
      lastLogin: serverTimestamp()
    })
}

function createUser() {
  const { subscribe, set } = writable(new AppUser())

  firebaseAuth.subscribe((fbAuth) => {
    fbAuth.onAuthStateChanged(async (user) => {
      console.log('auth state changed', user)
      if (user) {
        const au = new AppUser(user)
        await syncFirebaseUser(au)
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
