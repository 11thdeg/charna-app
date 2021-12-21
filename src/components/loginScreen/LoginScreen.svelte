<script lang="ts">
  import Button from '../material/Button/Button.svelte'
  import { loginComplete } from '../../stores/authStore'
</script>

<main>
  <img alt="Charna" src="icons/dark/fox.svg" class="sitelogo" />
  {#if $loginComplete}
    <div class="buttons">
      <h1>Login</h1>
      <Button>Google</Button>
      <Button>Facebook</Button>
    </div>
  {/if}
</main>

<style lang="sass">
main
  padding: 0
  margin: 0
  height: 100vh
  width: 100vw
.sitelogo
  width: min(256px, 80vw)
  margin: 24px auto
  display: block
.buttons
  margin: 24px auto
  display: flex
  flex-direction: column
  width: min(256px, 80vw)
  gap: 12px
</style>
