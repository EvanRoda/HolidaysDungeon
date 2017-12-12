import {Geometry} from "./Geometry";
export class Thing {
    public things: Thing[];

    protected canvas: HTMLCanvasElement;
    protected ctx: CanvasRenderingContext2D;
    protected parent: Thing;
    protected needRender: boolean;
    protected bbox: Bounds;

    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
    }

    public draw(parentContext: CanvasRenderingContext2D): void {
        if (this.needRender) {
            this.render();

            for (const thing: Thing of this.things) {
                thing.draw(this.ctx);
            }

            this.needRender = false;
        }

        parentContext.setTransform(1, 0, 0, 1, this.bbox[0], this.bbox[1]);
        parentContext.drawImage(this.canvas, 0, 0);
    }

    public addTo(parent: Thing, x: number, y: number): void {
        this.parent = parent;
        this.parent.things.unshift(this);

        this.bbox = [x, y, x + this.canvas.width, y + this.canvas.height];
    }

    public setNeedRender(): void {
        this.needRender = true;
        if (this.parent) {
            this.parent.setNeedRender();
        }
    }

    public hover(): void {}

    public click(point: Point): void {
        if(!Geometry.pointInBbox(event.point, this.bbox)) return;

        this.onClick();

        const projectPoint: Point = [
            point[0] - this.bbox[0],
            point[1] - this.bbox[1]
        ];

        for (const thing: Thing of this.things) {
            thing.click(projectPoint);
        }
    }
    
    protected onClick(): void {}

    protected render(): void {}
}