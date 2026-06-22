import {
    changeScene
}
from '../managers/scene-manager.js';

import {
    completeStore
}
from '../core/game-state.js';

const houses = [

    'Gryffindor',

    'Ravenclaw',

    'Hufflepuff',

    'Slytherin'

];

let selectedHouse = null;

let spinInterval = null;

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

                houses[
                    currentIndex
                ];

            currentIndex++;

            if (
                currentIndex >=
                houses.length
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
        .classList.remove(
            'hidden'
        );

}

function acceptHouse() {

    saveHouse(
        selectedHouse
    );

}

function showHouseSelection() {

    document
        .querySelector(
            '#sorting-dialog'
        )
        .textContent =

        `The Sorting Hat believes you belong to ${selectedHouse}. Are you sure you want another House?`;

    document
        .querySelector(
            '#house-selection'
        )
        .classList.remove(
            'hidden'
        );

}

function bindHouseOption(
    button
) {

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

function saveHouse(
    house
) {

    setPlayerHouse(
        house
    );

    completeStore(
        'sortingCompleted'
    );

    document
        .querySelector(
            '#sorting-dialog'
        )
        .textContent =

        `${house}! Welcome to your House.`;

    document
        .querySelector(
            '#sorting-result'
        )
        .textContent =

        house;

    document
        .querySelector(
            '#sorting-actions'
        )
        .classList.add(
            'hidden'
        );

    document
        .querySelector(
            '#house-selection'
        )
        .classList.add(
            'hidden'
        );

    setTimeout(

        () => {

            changeScene(
                'courtyard'
            );

        },

        3000

    );

}