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

<div class="icon {sizeClass}">
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
  &.xSmall // Inline with small text, with line-height of 24px
    height: 18px
    width: 18px
  &.small // at 1 grid height (24px)
    height: 24px
    width: 24px
  // medium, as "default" is at 2 grid height (48px)
  &.large // at 3 grid height (72px)
    height: 72px
    width: 27px
  &.xlarge // at 4 grid height (96px)
    height: 96px
    width: 96px

</style>
