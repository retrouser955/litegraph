import type { LGraph } from "litegraph.js";
import { BaseNode } from "../nodes/BaseNode";
import { GenerationContext } from "./GenerationContext";

function sortTopologically(graph: LGraph) {
    const visited = new Set<BaseNode>();
    const tempMarks = new Set<BaseNode>(); // detect if execution goes in a loop ...
    const sorted: BaseNode[] = [];

    function visit(node: BaseNode) {
        node.pos[0] += 0.01;
        node.pos[0] -= 0.01;
        if(visited.has(node)) return;
        if(tempMarks.has(node)) return;

        tempMarks.add(node);

        for(const input of node.inputs || []) {
            console.log(`processing ${node.title} and its inputs ...`)
            if(input && input.link) {
                const link = graph.links[input.link];
                if(!link) continue;
                const inputNode = graph.getNodeById(link.id);
                if(inputNode) visit(inputNode as BaseNode);
            }
        }

        tempMarks.delete(node);
        visited.add(node);
        sorted.push(node);
    }

    // @ts-expect-error
    (graph._nodes as BaseNode[]).forEach(node => {
        if(!visited.has(node)) visit(node);
    });

    return sorted;
}

export function generateCode(graph: LGraph) {
    graph.updateExecutionOrder();
    graph.configure(graph.serialize());

    const sorted = sortTopologically(graph)
    const context = new GenerationContext();
    let code = "";

    sorted.forEach((node) => {
        const c = node.onGenerateCode(context);
        code += `${c}\n`;
    })

    return code.trim();
}