import {
    changeScene
}
from '../managers/scene-manager.js';

import {
    completeStore
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

    completeStore(
        'arrivalCompleted'
    );

    changeScene(
        'lake-path'
    );

}