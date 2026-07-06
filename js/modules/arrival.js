import {
    changeScene
}
from '../managers/scene-manager.js';

import {
    completeProgress
}
from '../core/game-state.js';

export function initArrival() {

    document
        .querySelector(
            '#go-to-lake'
        )
        ?.addEventListener(

            'click',

            startLakeJourney

        );

}

function startLakeJourney() {

    completeProgress(
        'arrivalCompleted'
    );

    changeScene(
        'lake-path'
    );

}