<script lang="ts">
  import { LGraphCanvas, LiteGraph } from "litegraph.js";
  import { onMount } from "svelte";
  import "litegraph.js/css/litegraph.css";
  import { createGraph } from "./utils/createGraph";
    import { registerNodes } from "./utils/registerNodes";
  let canvas: HTMLCanvasElement;

  onMount(async () => {
    registerNodes()

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const graph = createGraph();
    new LGraphCanvas(canvas, graph);
  })
</script>
<canvas class="editor" bind:this={canvas}></canvas>
<style>
  .editor {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0px;
    left: 0px;
  }
</style>