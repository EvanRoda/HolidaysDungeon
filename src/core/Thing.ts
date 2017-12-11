export class Thing{
    public bbox: Bounds;
    private sprite: HTMLCanvasElement;
    private hover: () => {};

    draw(parentContext: CanvasRenderingContext2D): void {
        parentContext.setTransform(1, 0, 0, 1, this.bbox[0], this.bbox[1]);
        parentContext.drawImage(this.sprite, 0, 0);
    }
}