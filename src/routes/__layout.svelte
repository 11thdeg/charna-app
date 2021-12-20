<script lang="ts">
  import '../styles/app.sass'
  function toggle() {
    window.document.body.classList.toggle('darkmode')
  }
</script>

<main>
  <slot />
</main>

<button on:click={toggle}>Toggle dark mode</button>
