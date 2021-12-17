<script lang="ts">
  import { icons } from './icons.json'
  export let name: string
  export let darkmode: string = 'dark'
  export let xSmall: boolean = false
  export let small: boolean = false
  export let large: boolean = false
  export let xLarge: boolean = false

  $: stub = icons.includes(name) ? name : 'default'
  $: iconsrc = `/icons/${darkmode}/${stub}.svg`
  $: sizeClass = xSmall ? 'xSmall' : small ? 'small' : large ? 'large' : xLarge ? 'xlarge' : ''
</script>

<div class="icon {darkmode} {sizeClass}">
  <img src={iconsrc} alt={name} />
</div>

<style lang="sass">
.icon
  display: inline-block
  height: 48px
  width: 48px
  border-radius: 50%
  overflow: visible
  vertical-align: middle
  img
    height: 100%
    width: 100%
  &.xSmall
    height: 24px
    width: 24px
  &.small
    height: 32px
    width: 32px
  &.large
    height: 64px
    width: 64px
  &.xlarge
    height: 96px
    width: 96px

.icon.dark
  background-color: var(--color-secondary-d)
.icon.light
  background-color: var(--color-secondary-l)
</style>
