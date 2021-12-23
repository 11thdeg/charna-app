import { firebaseConfig } from '$lib/env'
import { initializeApp } from 'firebase/app'
import { readable } from 'svelte/store'

import type { FirebaseApp } from 'firebase/app'
import type { Readable } from 'svelte/store'

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {}

let app: FirebaseApp | null = null

/**
 * @returns {FirebaseApp} Firebase App instance
 */
const firebase: Readable<FirebaseApp> = readable(null, (set) => {
  if (!app) {
    app = initializeApp(firebaseConfig)
  }
  set(app)
  return noop
})

export { firebase }