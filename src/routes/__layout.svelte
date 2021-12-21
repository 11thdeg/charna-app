<script lang="ts">
  import '../styles/app.sass'
  import { toggleDarkmode } from '../stores'
  import { firebaseApp } from '../firebase'
  import { getAuth } from 'firebase/auth'
  import { uid } from '../stores/authStore'

  const auth = getAuth($firebaseApp)

  let displayname = ''
  auth.onAuthStateChanged((user) => {
    if (user && !user.isAnonymous) {
      uid.set(user.uid)
      displayname = user.displayName
    } else {
      uid.set('')
    }
  })
  $: name = displayname || 'Guest'
</script>

<nav>
  Welcome {name}
  – <a href="/">Index</a>
  – <a href="/stylebook">Stylebook</a>
</nav>

<main>
  <slot />
</main>

<button on:click={toggleDarkmode}>Toggle dark mode</button>
