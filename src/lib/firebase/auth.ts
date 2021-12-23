import { getAuth } from "firebase/auth"
import { get, readable, Readable } from "svelte/store"
import { firebase } from '$lib/firebase'
import type { Auth } from 'firebase/auth'

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {}

let localAuth: Auth | null = null

/**
 * @returns {Auth} Firebase Auth instance
 */
const auth: Readable<Auth> = readable(null, (set) => {
  if (!localAuth) {
    localAuth = getAuth(get(firebase))
  }
  set(localAuth)
  return noop
})

export { auth }
