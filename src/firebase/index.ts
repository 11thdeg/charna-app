import { firebaseConfig } from '../env'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { readable } from 'svelte/store'
import type { FirebaseApp } from 'firebase/app'
import type { Auth } from 'firebase/auth'
import type { Readable } from 'svelte/store'

// SvelteKit init for Firebase at the _Client side_

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {}

let app: FirebaseApp | null = null
function getApp(): FirebaseApp {
  if (!app) {
    app = initializeApp(firebaseConfig)
  }
  return app
}

/**
 * @returns {FirebaseApp} Firebase App instance
 */
const firebaseApp: Readable<FirebaseApp> = readable(null, (set) => {
  set(getApp())
  return noop
})

let auth: Auth | null = null

/**
 * @returns {Auth} Firebase Auth instance
 */
const firebaseAuth: Readable<Auth> = readable(null, (set) => {
  if (!app) {
    app = getApp()
  }
  if (!auth) {
    auth = getAuth(app)
  }
  set(auth)
  return noop
})

export { firebaseApp, firebaseAuth }
