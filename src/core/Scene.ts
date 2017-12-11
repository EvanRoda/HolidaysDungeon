import {Branch} from "interfaces/Branch";
import {Thing} from "./Thing";

export class Scene {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    tree: Branch;
    things: {[key: string]: Thing};

    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
    }

    public drawOnReal(realCtx: CanvasRenderingContext2D): void {
        realCtx.drawImage(this.canvas, 0, 0);
    }

    public destroy(): void {

    }


}
