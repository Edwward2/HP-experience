import {
    changeScene
}
from '../managers/scene-manager.js';

import {
    setPlayerWand,
    completeStore
}
from '../core/game-state.js';

let currentPage = 1;

let chosenWand =
    Math.floor(
        Math.random() * 15
    ) + 1;

let wandSelected = false;

export function initOllivanders() {

    const startButton =
        document.querySelector(
            '#start-wand-selection'
        );

    const selection =
        document.querySelector(
            '#wand-selection'
        );

    const image =
        document.querySelector(
            '#wand-carousel-image'
        );

    const prevButton =
        document.querySelector(
            '#wand-prev'
        );

    const nextButton =
        document.querySelector(
            '#wand-next'
        );

    const returnButton =
        document.querySelector(
            '#return-diagon'
        );

    if (!startButton) {
        return;
    }

    startButton.addEventListener(
        'click',
        () => {

            selection?.classList.remove(
                'hidden'
            );

            updateButtons();

            startButton.classList.add(
                'hidden'
            );

        }
    );

    prevButton?.addEventListener(
        'click',
        () => {

            if (
                currentPage <= 1
            ) {
                return;
            }

            currentPage--;

            image.src =
                `./assets/images/ollivanders/wands_${currentPage}.png`;

            updateButtons();

        }
    );

    nextButton?.addEventListener(
        'click',
        () => {

            if (
                currentPage >= 3
            ) {
                return;
            }

            currentPage++;

            image.src =
                `./assets/images/ollivanders/wands_${currentPage}.png`;

            updateButtons();

        }
    );

    document
        .querySelectorAll(
            '#wand-buttons button'
        )
        .forEach(

            button => {

                button.addEventListener(
                    'click',
                    tryWand
                );

            }

        );

    returnButton?.addEventListener(
        'click',
        () => {

            changeScene(
                'diagon'
            );

        }
    );

}

function updateButtons() {

    const buttons =

        document.querySelectorAll(
            '#wand-buttons button'
        );

    const startIndex =

        (currentPage - 1) * 5;

    buttons.forEach(

        (
            button,
            index
        ) => {

            const wandNumber =

                startIndex +
                index +
                1;

            button.dataset.wand =
                wandNumber;

            button.textContent =
                `Wand ${wandNumber}`;

        }

    );

}

function tryWand(
    event
) {

    if (
        wandSelected
    ) {
        return;
    }

    const selectedWand =

        Number(
            event.target.dataset.wand
        );

    const dialog =

        document.querySelector(
            '#ollivanders-dialog'
        );

    if (
        selectedWand ===
        chosenWand
    ) {

        wandSelected = true;

        dialog.textContent =
            '✨ The wand has chosen you. ✨';

        event.target.disabled =
            true;

        setPlayerWand(

            selectedWand,

            `./assets/images/ollivanders/wands_${currentPage}.png`

        );

        completeStore(
            'ollivandersCompleted'
        );

        completeOllivanders();

        return;

    }

    const failures = [

        'Books fly everywhere!',

        'Shelves shake violently!',

        'A red flash explodes!',

        'The wand rejects you!',

        'Magical sparks fill the room!'

    ];

    dialog.textContent =

        failures[
            Math.floor(
                Math.random() *
                failures.length
            )
        ];

}

function completeOllivanders() {

    const returnButton =

        document.querySelector(
            '#return-diagon'
        );

    const dialog =

        document.querySelector(
            '#ollivanders-dialog'
        );

    dialog.textContent =

        'You may now return to Diagon Alley.';

    returnButton?.classList.remove(
        'hidden'
    );

}