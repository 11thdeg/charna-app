<script lang="ts">
  import { signInWithRedirect, GoogleAuthProvider } from 'firebase/auth'
  import { firebaseAuth } from '../firebase'

  let loggingIn = false

  async function signInWithGoogle() {
    if (loggingIn) return
    loggingIn = true

    await signInWithRedirect($firebaseAuth, new GoogleAuthProvider())

    loggingIn = false
  }
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<p><a href="/stylebook">Stylebook</a>.</p>
{#if !loggingIn}
  <button on:click={signInWithGoogle}>Sign in with Google</button>
{/if}
