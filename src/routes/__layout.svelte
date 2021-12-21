<script lang="ts">
  import '../styles/app.sass'
  import { toggleDarkmode } from '../stores'
  import { isAnonymous } from '../stores/authStore'
  import LoginScreen from '../components/loginScreen/LoginScreen.svelte'
</script>

{#if !$isAnonymous}
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

{#if $isAnonymous}
  <LoginScreen />
{/if}
