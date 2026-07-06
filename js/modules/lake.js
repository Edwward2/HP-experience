import {
    changeScene
}
from '../managers/scene-manager.js';

import {
    completeProgress
}
from '../core/game-state.js';

let timer = 15;

let interval = null;

export function initLake() {

    document
        .querySelector(
            '#start-lake-crossing'
        )
        ?.addEventListener(

            'click',

            startCrossing

        );

    document
        .querySelector(
            '#begin-crossing'
        )
        ?.addEventListener(

            'click',

            startBoatGame

        );

}

function startCrossing() {

    changeScene(
        'black-lake'
    );

}

function startBoatGame() {

    if (interval) {

        clearInterval(
            interval
        );

    }

    timer = 15;

    document
        .querySelector(
            '#boat-timer'
        )
        .textContent =

        `Time: ${timer}`;

    document
        .querySelector(
            '#boat-game'
        )
        .classList.remove(
            'hidden'
        );

    document
        .querySelector(
            '#begin-crossing'
        )
        .classList.add(
            'hidden'
        );

    interval = setInterval(

        updateBoatGame,

        1000

    );

}

function updateBoatGame() {

    timer--;

    document
        .querySelector(
            '#boat-timer'
        )
        .textContent =

        `Time: ${timer}`;

    if (timer <= 0) {

        finishLake();

    }

}

function finishLake() {

    clearInterval(
        interval
    );

    interval = null;

    completeProgress(
        'blackLakeCompleted'
    );

    document
        .querySelector(
            '#black-lake-dialog'
        )
        .textContent =

        'You have safely crossed the lake.';

    setTimeout(

        () => {

            changeScene(
                'castle'
            );

        },

        3000

    );

}