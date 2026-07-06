import {
    changeScene
}
from '../managers/scene-manager.js';

import {
    setPlayerPet,
    completeProgress,
    getProgress
}
from '../core/game-state.js';

let selected = false;

export function initPets() {

    console.log(
        'PETS INITIALIZED'
    );

    const startButton =

        document.querySelector(
            '#start-pet-selection'
        );

    const selection =

        document.querySelector(
            '#pets-selection'
        );

    const returnButton =

        document.querySelector(
            '#return-diagon-pets'
        );

    const dialog =

        document.querySelector(
            '#pets-dialog'
        );

    const progress =
        getProgress();

    /* =========================
       ALREADY COMPLETED
    ========================= */

    if (
        progress.petsCompleted
    ) {

        selected = true;

        dialog.textContent =

            'Your companion has already been chosen.';

        startButton?.remove();

        returnButton?.classList.remove(
            'hidden'
        );

        return;
    }

    /* =========================
       START SELECTION
    ========================= */

    startButton?.addEventListener(

        'click',

        () => {

            document
                .querySelector(
                    '#pets-shop'
                )
                ?.style.setProperty(
                    'display',
                    'none'
                );

            selection?.classList.remove(
                'hidden'
            );

            startButton.classList.add(
                'hidden'
            );

        }

    );

    /* =========================
       PET BUTTONS
    ========================= */

    document
        .querySelectorAll(
            '#pet-buttons button'
        )
        .forEach(

            button => {

                button.addEventListener(
                    'click',
                    choosePet
                );

            }

        );

    /* =========================
       RETURN BUTTON
    ========================= */

    returnButton?.addEventListener(

        'click',

        () => {

            console.log(
                'RETURN TO DIAGON'
            );

            changeScene(
                'diagon'
            );

        }

    );
}

/* =========================
   CHOOSE PET
========================= */

function choosePet(
    event
) {

    if (
        selected
    ) {
        return;
    }

    selected = true;

    const petId =

        event.target.dataset.pet;

    setPlayerPet(

        petId,

        `./assets/images/pets/${petId}.png`

    );

    completeProgress(
        'petsCompleted'
    );

    const dialog =

        document.querySelector(
            '#pets-dialog'
        );

    dialog.textContent =

        `${petId.toUpperCase()} has become your magical companion.`;

    document
        .querySelector(
            '#return-diagon-pets'
        )
        ?.classList.remove(
            'hidden'
        );

    document
        .querySelectorAll(
            '#pet-buttons button'
        )
        .forEach(

            button => {

                button.disabled = true;

            }

        );

}