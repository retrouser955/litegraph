import { mount } from 'svelte'
import App from './App.svelte'
import type { BaseNode } from './lib/nodes/BaseNode'

const app = mount(App, {
  target: document.getElementById('app')!,
})

declare module "litegraph.js" {
  interface LGraph {
    // @ts-expect-error
    _nodes: BaseNode[]
  }
}

export default app
