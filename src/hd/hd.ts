export class Hd {
    real: HTMLCanvasElement;
    realCtx: CanvasRenderingContext2D;

    constructor(container: HTMLElement) {
        console.log('constructor');
        this.real = document.createElement('canvas');
        this.realCtx = this.real.getContext('2d');

        this.real.width = container.clientWidth;
        this.real.height = container.clientHeight;

        container.appendChild(this.real);

        this.drawTest();
    }

    private drawTest(): void {
        console.log('drawTest');

        this.realCtx.fillStyle = 'green';
        this.realCtx.fillRect(0, 0, 200, 200);
    }

    private redraw(): void {

    }
}