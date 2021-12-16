<script lang="ts">
  import { icons } from './icons.json'
  export let name:string
  export let darkmode:string = 'dark'

  $: stub = icons.includes(name) ? name : 'default'
  $: iconsrc = `/icons/${darkmode}/${stub}.svg`

</script>

<div class="icon {darkmode}">
  <img src={ iconsrc } alt="{ name }">
</div>

<style lang="sass">
.icon
  height: 48px
  width: 48px
  border-radius: 50%
  overflow: visible
  img
    height: 100%
    width: 100%
  
.icon.dark
  background-color: var(--color-secondary-d)
.icon.light
  background-color: var(--color-secondary-l)
</style>