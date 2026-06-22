/* =========================
GAME STATE
========================= */

import {
    completeScene,
    saveGame
}
from '../core/game-state.js';

/* =========================
SCENE MANAGER
========================= */

import {
    changeScene
}
from '../managers/scene-manager.js';

/* =========================
STATE
========================= */

let envelope = null;

let seal = null;

let letterContent = null;

let isOpened = false;

/* =========================
INIT
========================= */

export function initLetter() {

    envelope =
        document.querySelector(
            '#envelope'
        );

    seal =
        document.querySelector(
            '#seal'
        );

    letterContent =
        document.querySelector(
            '#letter-content'
        );

    initializeSeal();

    initializeAcceptButton();

    initializeDeclineButton();
}

/* =========================
SEAL
========================= */

function initializeSeal() {

    if (!seal) return;

    seal.removeEventListener(
        'click',
        openLetter
    );

    seal.addEventListener(
        'click',
        openLetter
    );
}

/* =========================
OPEN LETTER
========================= */

function openLetter() {

    if (isOpened) {
        return;
    }

    if (
        !envelope ||
        !seal ||
        !letterContent
    ) {
        return;
    }

    isOpened = true;

    envelope.classList.add(
        'opening'
    );

    seal.classList.add(
        'opening'
    );

    completeScene(
        'letter'
    );

    saveGame();

    setTimeout(() => {

        envelope.style.display =
            'none';

        seal.style.display =
            'none';

        letterContent.classList.remove(
            'hidden'
        );

        letterContent.classList.add(
            'show-letter'
        );

    }, 900);
}

/* =========================
ACCEPT BUTTON
========================= */

function initializeAcceptButton() {

    const acceptButton =

        document.querySelector(
            '#accept-btn'
        );

    if (!acceptButton) {
        return;
    }

    acceptButton.removeEventListener(
        'click',
        acceptInvitation
    );

    acceptButton.addEventListener(
        'click',
        acceptInvitation
    );
}

/* =========================
DECLINE BUTTON
========================= */

function initializeDeclineButton() {

    const declineButton =

        document.querySelector(
            '#decline-btn'
        );

    if (!declineButton) {
        return;
    }

    declineButton.removeEventListener(
        'click',
        declineInvitation
    );

    declineButton.addEventListener(
        'click',
        declineInvitation
    );
}

/* =========================
ACCEPT INVITATION
========================= */

function acceptInvitation() {

    destroyLetter(
        transitionToDiagon
    );
}

/* =========================
DECLINE INVITATION
========================= */

function declineInvitation() {

    destroyLetter(
        transitionToGoodbye
    );
}

/* =========================
DESTROY LETTER
========================= */

function destroyLetter(
    callback
) {

    if (!letterContent) {
        return;
    }

    const animation =

        letterContent.animate(

            [

                {
                    opacity: 1,
                    transform: 'scale(1)'
                },

                {
                    opacity: 0,
                    transform:
                        'scale(1.25) rotate(6deg)'
                }

            ],

            {

                duration: 1400,

                easing: 'ease-in-out',

                fill: 'forwards'

            }

        );

    animation.onfinish = () => {

        if (
            typeof callback ===
            'function'
        ) {

            callback();

        }

    };
}

/* =========================
DIAGON TRANSITION
========================= */

function transitionToDiagon() {

    changeScene(
        'diagon'
    );
}

/* =========================
GOODBYE TRANSITION
========================= */

function transitionToGoodbye() {

    const container =

        document.querySelector(
            '.letter-container'
        );

    if (!container) {
        return;
    }

    container.innerHTML = `

        <div class="muggle-message">

            <h1>
                Magic Is Not For Muggles
            </h1>

            <p>
                Hogwarts patiently awaits
                your decision...
            </p>

        </div>

    `;

    setTimeout(() => {

        location.reload();

    }, 5000);
}

/* =========================
PLAYER NAME
========================= */

export function updateLetterName(
    playerName
) {

    const playerElement =

        document.querySelector(
            '#letter-player-name'
        );

    if (!playerElement) {
        return;
    }

    playerElement.textContent =

        playerName?.trim()

            ? `Dear ${playerName}`

            : 'Dear Student';
}

/* =========================
RESET
========================= */

export function resetLetter() {

    isOpened = false;

    if (envelope) {

        envelope.style.display =
            'block';

        envelope.classList.remove(
            'opening'
        );
    }

    if (seal) {

        seal.style.display =
            'block';

        seal.classList.remove(
            'opening'
        );
    }

    if (letterContent) {

        letterContent.classList.add(
            'hidden'
        );

        letterContent.classList.remove(
            'show-letter'
        );

        letterContent.style.opacity =
            '';

        letterContent.style.transform =
            '';
    }
}