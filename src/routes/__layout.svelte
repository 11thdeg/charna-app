<script lang="ts">
  import { onMount } from 'svelte'
  import { browser } from '$app/env'
  import '../styles/app.sass'
  import { darkmode, toggleDarkmode } from '../stores'
</script>

<main>
  <slot />
</main>

<button on:click={toggleDarkmode}>Toggle dark mode</button>
