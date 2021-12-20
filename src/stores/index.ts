import { writable } from 'svelte/store'
import { browser } from '$app/env'

export const darkmode = writable(true)

export function toggleDarkmode (): void {
  darkmode.update(v => !v)
}

// Required by SSR 
if (browser) {
  darkmode.subscribe((value) => {
  
    if (value) window.document.body.classList.add('darkmode')
    else window.document.body.classList.remove('darkmode')
  })

  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    if (event.matches) {
      darkmode.set(true)
    } else {
      darkmode.set(false)
    }
  })
}