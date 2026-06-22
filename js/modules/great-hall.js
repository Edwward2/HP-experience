import {
    changeScene
}
from '../managers/scene-manager.js';

import {
    completeStore
}
from '../core/game-state.js';

const ceilingImages = [

    './assets/images/hogwarts/hogwarts_gates.png',

    './assets/images/hogwarts/great_hall_sunny.png',

    './assets/images/hogwarts/great_hall_rain.png',

    './assets/images/hogwarts/great_hall_snow.png',

    './assets/images/hogwarts/great_hall_wint.png'

];

const ceilingTexts = [

    'Welcome to the Great Hall.',

    'Sunlight floods the enchanted ceiling.',

    'Rain clouds gather high above Hogwarts.',

    'Snow drifts silently across the ceiling.',

    'Lightning flashes in the distance.'

];

let currentImage = 0;

let ceilingInterval = null;

export function initGreatHall() {

    document
        .querySelector(
            '#observe-ceiling'
        )
        ?.addEventListener(

            'click',

            startCeilingExperience

        );

}

function startCeilingExperience() {

    const button =

        document.querySelector(
            '#observe-ceiling'
        );

    button.disabled = true;

    changeCeiling();

    ceilingInterval =

        setInterval(

            changeCeiling,

            3000

        );

    setTimeout(

        finishCeilingExperience,

        15000

    );

}

function changeCeiling() {

    const image =

        document.querySelector(
            '#great-hall-image'
        );

    const dialog =

        document.querySelector(
            '#great-hall-dialog'
        );

    image.src =

        ceilingImages[
            currentImage
        ];

    dialog.textContent =

        ceilingTexts[
            currentImage
        ];

    currentImage++;

    if (

        currentImage >=
        ceilingImages.length

    ) {

        currentImage = 0;

    }

}

function finishCeilingExperience() {

    clearInterval(
        ceilingInterval
    );

    completeStore(
        'greatHallCompleted'
    );

    document
        .querySelector(
            '#great-hall-dialog'
        )
        .textContent =

        'The Sorting Hat awaits your arrival.';

    document
        .querySelector(
            '#observe-ceiling'
        )
        .classList.add(
            'hidden'
        );

    document
        .querySelector(
            '#great-hall-ui'
        )
        .insertAdjacentHTML(

            'beforeend',

            `
            <button
                id="go-to-sorting">

                Approach The Sorting Hat

            </button>
            `

        );

    document
        .querySelector(
            '#go-to-sorting'
        )
        ?.addEventListener(

            'click',

            () => {

                changeScene(
                    'sorting'
                );

            }

        );

}