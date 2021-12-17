<script lang="ts">
  import { icons } from '../../components/material/icon/icons.json'
  import Icon from '../../components/material/icon/Icon.svelte'
</script>

<h1>Iconography</h1>

<a href="./stylebook/iconography">Show only this</a>

{#each icons as icon}
  <Icon name={icon} small />
{/each}
