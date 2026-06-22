import {
    changeScene
}
from '../managers/scene-manager.js';

export function initCastle() {

    document
        .querySelector(
            '#enter-great-hall'
        )
        ?.addEventListener(

            'click',

            () => {

                changeScene(
                    'great-hall'
                );

            }

        );

}