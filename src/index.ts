import { Hd } from './hd/hd'

console.log('Start build 4');

waitBody();

function waitBody() {
    if (document.body && document.body.clientHeight) {
        const hd = new Hd(document.body);
        return;
    }

    requestAnimationFrame(waitBody);
}
