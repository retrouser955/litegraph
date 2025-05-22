<script lang="ts">
  import { generateCode } from "./lib/generator/CodeGenerator";
  import LiteGraphEditor from "./lib/LiteGraphEditor.svelte";
  import { createGraph } from "./lib/utils/createGraph";
</script>

<main>
  <LiteGraphEditor />
  <button class="test-button" on:click={() => {
    const graph = createGraph();

    console.log(generateCode(graph));
  }}>Test</button>
</main>

<style>
  .test-button {
    position: absolute;
    right: 100px;
    top: 0px;
  }
</style>