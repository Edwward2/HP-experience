import {
    changeScene
}
from '../managers/scene-manager.js';

export function initStation() {

    document
        .querySelector(
            '#approach-platform'
        )
        ?.addEventListener(

            'click',

            enterPlatform

        );

}
function enterPlatform() {


    const image =

        document.querySelector(
            '#station-image'
        );

    const dialog =

        document.querySelector(
            '#station-dialog'
        );

    const button =

        document.querySelector(
            '#approach-platform'
        );

    image.src =

        './assets/images/station/platform_934.png';

    dialog.textContent =

        'Run through the barrier between platforms 9 and 10.';

    button.textContent =

        'Run Through The Barrier';

    button.onclick =

        boardTrain;

}
function boardTrain() {

    changeScene(
        'train'
    );

}