import { initializeApp } from "firebase/app"
import { firebaseConfig } from "../env"
import { browser } from "$app/env"

let firebaseApp

export function useFirebase(): { firebaseApp } {
  if (browser) {
  if (!firebaseApp) {
    firebaseApp = initializeApp(firebaseConfig)
  }
  }
  return { firebaseApp }
}