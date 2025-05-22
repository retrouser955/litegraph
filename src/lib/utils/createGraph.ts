import { LGraph } from "litegraph.js";

let graph: LGraph | undefined = undefined;

export function createGraph() {
    if(!graph) graph = new LGraph()
    return graph
}