import {
    changeScene
} from '../managers/scene-manager.js';

import {
    completeProgress,
    getProgress,
    isMapUnlocked
} from '../core/game-state.js';

/* ==========================
   GREAT HALL ATMOSPHERE
========================== */

const ceilingImages = [
    './assets/images/hogwarts/great_hall_sunny.png',
    './assets/images/hogwarts/great_hall_rain.png',
    './assets/images/hogwarts/great_hall_snow.png',
    './assets/images/hogwarts/great_hall_wint.png'
];

const ceilingTexts = [
    'Sunlight floods the enchanted ceiling.',
    'Rain clouds gather high above Hogwarts.',
    'Snow drifts silently across the ceiling.',
    'Lightning flashes above the Great Hall.'
];

/* ==========================
   INIT
========================== */

export function initGreatHall() {

    changeCeiling();

    setupSortingButton();

    unlockDestinations();

    setupMaraudersMapButton();

    completeProgress('greatHallVisited');

}

/* ==========================
   CHANGE CEILING
========================== */

function changeCeiling() {

    const image =
        document.querySelector('#great-hall-image');

    const dialog =
        document.querySelector('#great-hall-dialog');

    if (!image || !dialog) {
        return;
    }

    const index =
        Math.floor(
            Math.random() * ceilingImages.length
        );

    image.src =
        ceilingImages[index];

    dialog.textContent =
        ceilingTexts[index];

}

/* ==========================
   SORTING
========================== */

function setupSortingButton() {

    const button =
        document.querySelector('#go-to-sorting');

    if (!button) {
        return;
    }

    const progress =
        getProgress();

    if (!progress.sortingCompleted) {

        button.classList.remove('hidden');

    }

    button.addEventListener(
        'click',
        () => {
            changeScene('sorting');
        }
    );

}

/* ==========================
   HOGWARTS HUB
========================== */

function unlockDestinations() {

    const destinations = {
        'go-to-library': 'library',
        'go-to-astronomy': 'astronomy',
        'go-to-greenhouses': 'greenhouses',
        'go-to-quidditch': 'quidditch'
    };

    Object.entries(destinations).forEach(

        ([buttonId, scene]) => {

            const button =
                document.querySelector(
                    `#${buttonId}`
                );

            if (!button) {
                return;
            }

            button.classList.remove('hidden');

            button.addEventListener(
                'click',
                () => {
                    changeScene(scene);
                }
            );

        }

    );

}

/* ==========================
   MARAUDER'S MAP
========================== */

function setupMaraudersMapButton() {

    const button =
        document.querySelector(
            '#marauders-map-button'
        );

    if (!button) {
        return;
    }

    if (isMapUnlocked()) {

        button.classList.remove(
            'hidden'
        );

    }

    button.addEventListener(
        'click',
        () => {
            changeScene(
                'marauders-map'
            );
        }
    );

}