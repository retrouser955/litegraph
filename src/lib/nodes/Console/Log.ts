import type { GenerationContext } from "../../generator/GenerationContext";
import { BaseNode } from "../BaseNode";

export class LogNode extends BaseNode {
    builder(): void {
        this.setName("Log");
        this.addInput("input", "*");
    }

    onGenerateCode(ctx: GenerationContext): string {
        const inputNode = ctx.getVarNameByNode(this.getInputNode(0)! as BaseNode);

        return `console.log(${inputNode})`
    }
}