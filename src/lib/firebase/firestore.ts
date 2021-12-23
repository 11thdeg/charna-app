import { Firestore, getFirestore } from "firebase/firestore"
import { get, readable, Readable } from "svelte/store"
import { firebase } from "$lib/firebase"

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {}

let localFirestore: Firestore | null = null
/**
 * @returns {Firestore} Firebase Firestore instance
 */
const firestore: Readable<Firestore> = readable(null, (set) => {

  if (!localFirestore) {
    localFirestore = getFirestore(get(firebase))
  }
  set(localFirestore)
  return noop
})

export {
  firestore
}