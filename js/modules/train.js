import {
    changeScene
}
from '../managers/scene-manager.js';

import {
    completeStore,
    getProgress
}
from '../core/game-state.js';

let frogsCaught = 0;

let currentVision = 1;

export function initTrain() {

    bindCorridorButtons();

    document
        .querySelector(
            '#frog-button'
        )
        ?.addEventListener(

            'click',

            catchFrog

        );

    document
        .querySelector(
            '#continue-hogwarts'
        )
        ?.addEventListener(

            'click',

            () => {

                changeScene(
                    'journey-transition'
                );

                setTimeout(

                    () => {

                        changeScene(
                            'castle'
                        );

                    },

                    4000

                );

            }

        );

}

/* =========================
   CORRIDOR
========================= */

function bindCorridorButtons() {

    document
        .querySelector(
            '#window-room'
        )
        ?.addEventListener(

            'click',

            startWindowExperience

        );

    document
        .querySelector(
            '#frog-room'
        )
        ?.addEventListener(

            'click',

            startFrogGame

        );

}

/* =========================
   WINDOW EXPERIENCE
========================= */

function startWindowExperience() {

    currentVision = 1;

    document.querySelector(
        '#train-image'
    ).src =

        './assets/images/train/window_1.png';

    document.querySelector(
        '#train-dialog'
    ).textContent =

        'A magical landscape appears outside.';

    document.querySelector(
        '#train-options'
    ).innerHTML =

        `
        <button id="next-vision">

            Next Vision

        </button>

        <button id="return-corridor">

            Return To Corridor

        </button>
        `;

    document
        .querySelector(
            '#next-vision'
        )
        ?.addEventListener(

            'click',

            nextVision

        );

    document
        .querySelector(
            '#return-corridor'
        )
        ?.addEventListener(

            'click',

            returnToCorridor

        );

}

function nextVision() {

    currentVision++;

    const image =

        document.querySelector(
            '#train-image'
        );

    if (
        currentVision === 2
    ) {

        image.src =
            './assets/images/train/window_2.png';

        return;

    }

    if (
        currentVision === 3
    ) {

        image.src =
            './assets/images/train/window_3.png';

        return;

    }

    completeWindowExperience();

}

function completeWindowExperience() {

    completeStore(
        'trainWindowCompleted'
    );

    document.querySelector(
        '#train-dialog'
    ).textContent =

        'Window experience completed.';

    updateTrainProgress();

}

/* =========================
   RETURN TO CORRIDOR
========================= */

function returnToCorridor() {

    document.querySelector(
        '#train-image'
    ).src =

        './assets/images/train/train_corridor.png';

    document.querySelector(
        '#train-dialog'
    ).textContent =

        'Explore the train.';

    document.querySelector(
        '#train-options'
    ).innerHTML =

        `
        <button id="window-room">

            Window Compartment

        </button>

        <button id="frog-room">

            Chocolate Frog Challenge

        </button>
        `;

    bindCorridorButtons();

}

/* =========================
   CHOCOLATE FROG GAME
========================= */

function startFrogGame() {

    document.querySelector(
        '#train-image'
    ).src =

        './assets/images/train/frog_compartment.png';

    document.querySelector(
        '#train-dialog'
    ).textContent =

        'Catch 5 Chocolate Frogs.';

    document.querySelector(
        '#train-options'
    ).classList.add(
        'hidden'
    );

    document.querySelector(
        '#frog-game'
    ).classList.remove(
        'hidden'
    );

}

function catchFrog() {

    frogsCaught++;

    document.querySelector(
        '#frog-counter'
    ).textContent =

        `Frogs Caught: ${frogsCaught} / 5`;

    if (
        frogsCaught >= 5
    ) {

        finishTrain();

        return;

    }

    moveFrog();

}

function moveFrog() {

    const frog =

        document.querySelector(
            '#frog-button'
        );

    frog.style.marginLeft =

        `${Math.random() * 500}px`;

    frog.style.marginTop =

        `${Math.random() * 200}px`;

}

function finishTrain() {

    completeStore(
        'trainFrogCompleted'
    );

    document.querySelector(
        '#frog-game'
    ).classList.add(
        'hidden'
    );

    document.querySelector(
        '#train-image'
    ).src =
        './assets/images/train/train_smoke_transition.png';

    document.querySelector(
        '#train-dialog'
    ).textContent =
        'The Hogwarts Express races through the countryside toward Hogwarts...';

    setTimeout(

        () => {

            changeScene(
                'castle'
            );

        },

        5000

    );

}

/* =========================
   PROGRESS CHECK
========================= */

function updateTrainProgress() {

    const progress =
        getProgress();

    if (

        progress.trainWindowCompleted &&

        progress.trainFrogCompleted

    ) {

        
        document.querySelector(
            '#train-dialog'
        ).textContent =

            'All train activities completed. Hogwarts awaits.';

    }

}