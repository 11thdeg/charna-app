<script lang="ts">
  import '../styles/app.sass'
  import { toggleDarkmode } from '../stores'
  import { firebaseApp } from '../firebase'
  import { getAuth } from 'firebase/auth'
  import { isAnonymous, uid } from '../stores/authStore'
  import LoginScreen from '../components/loginScreen/LoginScreen.svelte'

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
  $: anon = $uid === ''
</script>

{#if !anon}
  <nav>
    <ul>
      <li><a href="/">Index</a></li>
      <li><a href="/stylebook">Stylebook</a></li>
      <li><button on:click={toggleDarkmode}>Toggle dark mode</button></li>
    </ul>
  </nav>
  <main>
    <slot />
  </main>
{/if}

{#if anon}
  <LoginScreen />
{/if}
