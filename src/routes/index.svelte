<script>
    import { state, actions } from '../overmind'
  
    $: count = $state.count
  </script>
  
  <p>Count: {count}</p>
  <button id="increase" on:click={() => actions.increase()}>Increase</button>
  <button id="decrease" on:click={() => actions.decrease()}>Increase</button>
