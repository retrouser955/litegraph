import { BaseNode } from "../nodes/BaseNode";

export class GenerationContext {
    nameMap = new Map<BaseNode, string>();
    usedNames = new Set<string>();

    requestUniqueName(node: BaseNode) {
        let count = 0;
        while(this.usedNames.has(`${node.title}_${count}`)) {
            count++;
        }
        const variableName = `${node.title}_${count}`;
        this.usedNames.add(variableName);
        this.nameMap.set(node, variableName);
        return variableName;
    }

    getVarNameByNode(node: BaseNode) {
        return this.nameMap.get(node);
    }
}