<script lang="ts">
  import { LGraphCanvas, LiteGraph } from "litegraph.js";
  import { onMount } from "svelte";
  import { Sum } from "./nodes/Math/Sum";
  import "litegraph.js/css/litegraph.css";
  import { createGraph } from "./utils/createGraph";
  import { NumberNode } from "./nodes/Math/Number";
  import { LogNode } from "./nodes/Console/Log";
  let canvas: HTMLCanvasElement;

  onMount(async () => {
    LiteGraph.clearRegisteredTypes();
    LiteGraph.registerNodeType("Math/Sum", Sum);
    LiteGraph.registerNodeType("Math/Number", NumberNode)
    LiteGraph.registerNodeType("Console/Log", LogNode);

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