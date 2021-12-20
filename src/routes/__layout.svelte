<script lang="ts">
  import '../styles/app.sass'
  import { toggleDarkmode } from '../stores'
</script>

<main>
  <slot />
</main>

<button on:click={toggleDarkmode}>Toggle dark mode</button>
