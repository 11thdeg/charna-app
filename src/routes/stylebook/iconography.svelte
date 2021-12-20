<script lang="ts">
  import { icons } from '../../components/material/icon/icons.json'
  import Icon from '../../components/material/icon/Icon.svelte'
</script>

<div>
  <h1>Iconography</h1>

  <a href="./stylebook/iconography">Show only this</a>
</div>

<div class="iconlist">
  {#each icons as icon}
    <div>
      <Icon name={icon} small />
    </div>
  {/each}
</div>

<style lang="sass">
div.iconlist
  display: flex
  flex-wrap: wrap
  justify-content: center
  gap: 8px
</style>
