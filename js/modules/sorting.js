import {
    changeScene
}
from '../managers/scene-manager.js';

import {
    completeProgress,
    setPlayerHouse
}
from '../core/game-state.js';

/* =========================
   HOUSES
========================= */
const houses = [
    'Gryffindor',
    'Ravenclaw',
    'Hufflepuff',
    'Slytherin'
];

const houseBanners = {
    Gryffindor: './assets/images/hogwarts/gryffindor_banner.png',

    Ravenclaw: './assets/images/hogwarts/ravenclaw_banner.png',

    Hufflepuff: './assets/images/hogwarts/hufflepuff_banner.png',

    Slytherin: './assets/images/hogwarts/slytherin_banner.png'
};

let selectedHouse = null;
let spinInterval = null;

/* =========================
   INIT
========================= */
export function initSorting() {
    document
        .querySelector(
            '#start-sorting'
        )
        ?.addEventListener(
            'click',
            startSorting
        );

    document
        .querySelector(
            '#accept-house'
        )
        ?.addEventListener(
            'click',
            acceptHouse
        );

    document
        .querySelector(
            '#change-house'
        )
        ?.addEventListener(
            'click',
            showHouseSelection
        );

    document
        .querySelectorAll(
            '.house-option'
        )
        .forEach(
            bindHouseOption
        );
}

/* =========================
   SORTING ANIMATION
========================= */
function startSorting() {
    const button =
        document.querySelector(
            '#start-sorting'
        );
    button.disabled = true;

    const result =
        document.querySelector(
            '#sorting-result'
        );
    result.classList.remove(
        'hidden'
    );

    let currentIndex = 0;
    spinInterval = setInterval(
        () => {
            result.textContent =
                houses[currentIndex];
            currentIndex++;
            if (
                currentIndex >= houses.length
            ) {
                currentIndex = 0;
            }
        },
        150
    );

    setTimeout(
        finishSorting,
        3000
    );
}

/* =========================
   HAT DECISION
========================= */
function finishSorting() {
    clearInterval(
        spinInterval
    );

    selectedHouse =
        houses[
            Math.floor(
                Math.random() *
                houses.length
            )
        ];
    showHouseResult();
}

function showHouseResult() {
    document
        .querySelector(
            '#sorting-result'
        )
        .textContent =
        selectedHouse;

    document
        .querySelector(
            '#sorting-dialog'
        )
        .textContent =
        `The Sorting Hat has chosen ${selectedHouse}.`;

    document
        .querySelector(
            '#sorting-actions'
        )
        .classList
        .remove(
            'hidden'
        );
}

/* =========================
   ACCEPT HOUSE
========================= */
function acceptHouse() {
    saveHouse(
        selectedHouse
    );
}

/* =========================
   CHANGE HOUSE
========================= */
function showHouseSelection() {
    document
        .querySelector(
            '#sorting-dialog'
        )
        .textContent =
        `The Sorting Hat believes you belong to ${selectedHouse}. Choose your destiny.`;

    document
        .querySelector(
            '#house-selection'
        )
        .classList
        .remove(
            'hidden'
        );
}

/* =========================
   MANUAL HOUSE SELECT
========================= */
function bindHouseOption(button) {
    button.addEventListener(
        'click',
        () => {
            selectedHouse =
                button.dataset.house;
            saveHouse(
                selectedHouse
            );
        }
    );
}

/* =========================
   SAVE + BANNER
========================= */
function saveHouse(house) {
    setPlayerHouse(
        house
    );

    completeProgress(
        'sortingCompleted'
    );

    document
        .querySelector(
            '#sorting-actions'
        )
        .classList
        .add(
            'hidden'
        );

    document
        .querySelector(
            '#house-selection'
        )
        .classList
        .add(
            'hidden'
        );
    showHouseBanner(
        house
    );
}

/* =========================
   SHOW BANNER
========================= */
function showHouseBanner(house) {
    const banner =
        document.querySelector(
            '#house-banner'
        );

    const dialog =
        document.querySelector(
            '#sorting-dialog'
        );

    if (
        !banner
    ) {
        return;
    }

    banner.src =
        houseBanners[house];

    banner.classList
        .remove(
            'hidden'
        );

    dialog.textContent =
        `${house}! Welcome to your House.`;

    document
        .querySelector(
            '#sorting-result'
        )
        .textContent =
        house;

    setTimeout(
        () => {

            banner.classList.add(
                'hidden'
            );

            changeScene(
                'great-hall'
            );
        },
        3000
    );
}