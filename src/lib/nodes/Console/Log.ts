import type { GenerationContext } from "../../generator/GenerationContext";
import { BaseNode } from "../BaseNode";

export class LogNode extends BaseNode {
    static category: string = "Console";
    static title: string = "Log";

    builder(): void {
        this.setName("Log");
        this.addInput("input", "*");
    }

    onGenerateCode(ctx: GenerationContext): string {
        const inputNode = ctx.getVarNameByNode(this.getInputNode(0)! as BaseNode);

        return `console.log(${inputNode})`
    }
}