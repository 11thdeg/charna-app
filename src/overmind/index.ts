import { createOvermind} from 'overmind'
import { namespaced } from 'overmind/config'
import { createMixin } from 'overmind-svelte'

const overmind = {
  state: {
    count: 0
  },
  actions: {
    increase({ state }) {
      state.count++;
    },
    decrease({ state }) {
      state.count--;
    }
  }
}

const store = createMixin(createOvermind(namespaced({overmind})))

export const state = store.state.overmind
export const actions = store.actions.overmind
