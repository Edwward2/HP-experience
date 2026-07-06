/* =========================
   CONFIG
========================= */

import {
    changeScene
}
from '../managers/scene-manager.js';

import {
    CONFIG
}
from '../core/config.js';

/* =========================
   STATE
========================= */

let starsCreated = false;

/* =========================
   INTRO MODULE
========================= */

export function initIntro() {

    initializeIntro();

}

/* =========================
   INITIALIZE
========================= */

function initializeIntro() {

    createStars();

    initializeFog();

    initializeMoon();

    registerIntroEvents();

    startHedwig();

}

/* =========================
   STARS
========================= */

function createStars() {

    const container =
        document.querySelector('#stars-container');

    if (!container) return;

    if (starsCreated) return;

    starsCreated = true;

    container.innerHTML = '';

    for (let i = 0; i < 250; i++) {

        const star =
            document.createElement('div');

        star.classList.add('star');

        const size = (Math.random() * 3) + 1;

        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;

        const duration = (2 + Math.random() * 5).toFixed(2);

        star.style.setProperty(
            '--twinkle-duration',
            `${duration}s`
        );

        star.style.animationDelay =
            `${Math.random() * 4}s`;

        container.appendChild(star);
    }
}

/* =========================
   FOG
========================= */

function initializeFog() {

    const fogLayers =

        document.querySelectorAll(
            '.fog'
        );

    if (!fogLayers.length) return;

    /*
    Futuro:

    - Audio reactivo
    - Niebla dinámica
    - Partículas mágicas
    */

}

/* =========================
   MOON
========================= */

function initializeMoon() {

    const moon =

        document.querySelector(
            '#moon'
        );

    if (!moon) return;

    /*
    Futuro:

    - Parallax
    - Glow dinámico
    - Fases lunares
    */

}

/* =========================
   FUTURE EVENTS
========================= */

function registerIntroEvents() {

    /*
    Futuro:

    - Audio Manager
    - Particle Manager
    - Cinematic Manager
    - Achievement Manager
    */

}

/* =========================
   HEDWIG
========================= */

function startHedwig() {

    const hedwig =

        document.querySelector(
            '#hedwig'
        );

    const letterContainer =

        document.querySelector(
            '.letter-container'
        );

    if (
        !hedwig ||
        !letterContainer
    ) {

        return;

    }

    hedwig
        .getAnimations()
        .forEach(
            animation =>
            animation.cancel()
        );

    const flightKeyframes = [

        {
            transform: `
                translateX(-400px)
                translateY(-250px)
                scale(0.05)
            `,
            opacity: 0
        },

        {
            transform: `
                translateX(-150px)
                translateY(-120px)
                scale(0.35)
            `,
            opacity: 1
        },

        {
            transform: `
                translateX(0px)
                translateY(-40px)
                scale(0.70)
            `,
            opacity: 1
        },

        {
            transform: `
                translateX(120px)
                translateY(20px)
                scale(1)
            `,
            opacity: 1
        }

    ];

    const animation =

        hedwig.animate(

            flightKeyframes,

            {

                duration:

                    CONFIG.ANIMATION
                    .HEDWIG_FLIGHT_DURATION,

                easing: 'ease-out',

                fill: 'forwards'

            }

        );

    animation.onfinish = () => {

        hideHedwig(
            hedwig
        );

        setTimeout(() => {

                changeScene(
                    CONFIG.SCENES.LETTER
                );

                revealEnvelope(
                    letterContainer
                );

            },

            CONFIG.ANIMATION
            .HEDWIG_FADE_DURATION);

    };

}

/* =========================
   ENVELOPE APPEAR
========================= */

function revealEnvelope(
    letterContainer
) {

    letterContainer.classList.remove(
        'hidden'
    );

    letterContainer.animate(

        [

            {
                opacity: 0,

                transform: `
                    translateY(-180px)
                    scale(.5)
                `
            },

            {
                opacity: 1,

                transform: `
                    translateY(0px)
                    scale(1)
                `
            }

        ],

        {

            duration: 1200,

            easing: 'ease-out',

            fill: 'forwards'

        }

    );

}

/* =========================
   HIDE HEDWIG
========================= */

function hideHedwig(
    hedwig
) {

    hedwig.animate(

        [

            {
                opacity: 1,

                transform: 'scale(1)'
            },

            {
                opacity: 0,

                transform: 'scale(.85)'
            }

        ],

        {

            duration: 1200,

            fill: 'forwards'

        }

    );

}

/* =========================
   INTRO COMPLETED
========================= */

function onIntroCompleted() {

    /*
    Futuro:

    - Sonido de carta
    - Partículas mágicas
    - Log de progreso
    - Achievement:
      "The Invitation"
    */

}

/* =========================
   RESTART
========================= */

export function restartIntro() {

    const starsContainer =

        document.querySelector(
            '#stars-container'
        );

    if (starsContainer) {

        starsContainer.innerHTML = '';

    }

    starsCreated = false;

    initIntro();

}