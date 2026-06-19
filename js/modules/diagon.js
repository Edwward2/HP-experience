import {
    changeScene
}
from '../managers/scene-manager.js';

import {
    getProgress,
    completeStore,
    getPlayerWand
}
from '../core/game-state.js';

/* =========================
   ELEMENTS
========================= */

let diagonImage = null;

let openWallButton = null;

let enterButton = null;

let title = null;

let description = null;

/* =========================
   INIT
========================= */

export function initDiagon() {

    diagonImage =
        document.querySelector(
            '#diagon-image'
        );

    openWallButton =
        document.querySelector(
            '#open-wall-btn'
        );

    enterButton =
        document.querySelector(
            '#enter-diagon-btn'
        );

    title =
        document.querySelector(
            '#diagon-title'
        );

    description =
        document.querySelector(
            '#diagon-description'
        );

    initializeEvents();
}

/* =========================
   EVENTS
========================= */

function initializeEvents() {

    if (openWallButton) {

        openWallButton.addEventListener(
            'click',
            openWall
        );
    }

    if (enterButton) {

        enterButton.addEventListener(
            'click',
            enterDiagon
        );
    }
}

/* =========================
   OPEN WALL
========================= */

function openWall() {

    diagonImage.style.opacity = 0;

    setTimeout(
        () => {

            diagonImage.src =
                './assets/images/diagon/callejon_diagon.png';

            diagonImage.style.opacity = 1;

        },
        1000
    );

    title.textContent =
        'The Wall Has Opened';

    description.textContent =
        'The path to the wizarding world is now revealed.';

    openWallButton.classList.add(
        'hidden'
    );

    enterButton.classList.remove(
        'hidden'
    );
}

/* =========================
   ENTER DIAGON
========================= */

function enterDiagon() {

    diagonImage.style.opacity = 0;

    setTimeout(
        () => {

            diagonImage.src =
                './assets/images/diagon/callejon_diagon_int.png';

            diagonImage.style.opacity = 1;

        },
        1000
    );

    title.textContent =
        'Welcome To Diagon Alley';

    description.textContent =
        'Choose where you want to go first.';

    enterButton.classList.add(
        'hidden'
    );

    document
        .querySelector(
            '#diagon-shops'
        )
        ?.classList.remove(
            'hidden'
        );

    document
        .querySelector(
            '#diagon-progress'
        )
        ?.classList.remove(
            'hidden'
        );

    updateDiagonProgress();
}


const ollivandersButton =

document.querySelector(
    '#visit-ollivanders'
);

ollivandersButton?.addEventListener(
    'click',
    () => {

        const progress =
            getProgress();

        if (
            progress
            .ollivandersCompleted
        ) {

            alert(
                'Your wand has already chosen you.'
            );

            return;
        }

        changeScene(
            'ollivanders'
        );

    }
);

const petsButton =

    document.querySelector(
        '#visit-pets'
    );

petsButton?.addEventListener(

    'click',

    () => {

        const progress =
            getProgress();

        if (
            progress.petsCompleted
        ) {

            alert(
                'Your magical companion has already been chosen.'
            );

            return;

        }

        changeScene(
            'pets'
        );

    }

);

const weasleyButton =

    document.querySelector(
        '#visit-weasley'
    );

weasleyButton?.addEventListener(

    'click',

    () => {

        const progress =
            getProgress();

        if (
            progress.weasleyCompleted
        ) {

            alert(
                'You already completed Weasleys Wizard Wheezes.'
            );

            return;
        }

        changeScene(
            'weasley'
        );

    }

);
const stationButton =

    document.querySelector(
        '#go-station'
    );

stationButton?.addEventListener(

    'click',

    () => {

        changeScene(
            'station'
        );

    }

);


function updateDiagonProgress() {

    const progress =
        getProgress();

    if (
        progress.ollivandersCompleted
    ) {

        document.querySelector(
            '#wand-status'
        ).textContent =
            'Wand: ✓';

    }

    if (
    progress.petsCompleted
    ) {

        document.querySelector(
            '#pet-status'
        ).textContent =
            'Pet: ✓';

    }

    if (
        progress.weasleyCompleted
    ) {
    
        document.querySelector(
            '#item-status'
        ).textContent =
            'Item: ✓';
    
    }
    if (

    progress.ollivandersCompleted &&

    progress.petsCompleted &&

    progress.weasleyCompleted

    ) {

    document
        .querySelector(
            '#station-access'
        )
        ?.classList.remove(
            'hidden'
        );

}
}