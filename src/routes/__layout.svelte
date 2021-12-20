<script lang="ts">
  import '../styles/app.sass'
  import { toggleDarkmode } from '../stores'
  import { useFirebase } from '../firebase'
  import { getAuth, onAuthStateChanged } from 'firebase/auth'

  useFirebase()

  onAuthStateChanged(getAuth(), (user) => {
    if (user) {
      console.log(user)
    } else {
      console.log('anonymous')
    }
  })
</script>

<main>
  <slot />
</main>

<button on:click={toggleDarkmode}>Toggle dark mode</button>
