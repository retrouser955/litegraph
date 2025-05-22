import { LiteGraph } from "litegraph.js";

// import the graphs
import { NumberNode } from "../nodes/Math/Number";
import { LogNode } from "../nodes/Console/Log";
import { Sum } from "../nodes/Math/Sum";
import { EqualNode } from "../nodes/Logic/IsEqual";

// TODO: Auto generate code for nodes on build time
export function registerNodes() {
    LiteGraph.clearRegisteredTypes();

    const nodes = [
        NumberNode,
        LogNode,
        Sum,
        EqualNode
    ];

    for(const Node of nodes) {
        LiteGraph.registerNodeType(Node.buildName(), Node)
    }
}