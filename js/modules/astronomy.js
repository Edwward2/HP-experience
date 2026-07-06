import {
    changeScene
} from '../managers/scene-manager.js';
import {
    completeProgress
} from '../core/game-state.js';

/* =========================
   SCENE
========================= */

const scene = document.querySelector('#astronomy');

/* =========================
   CONSTELLATIONS
========================= */

const constellations = [
    'Phoenix',
    'Dragon',
    'Hippogriff'
];

let discoveredConstellations = [];

/* =========================
   INIT
========================= */

export function initAstronomy() {
    scene.querySelector('#use-telescope')?.addEventListener('click', startAstronomy);

    scene.querySelectorAll('.constellation-option').forEach(bindConstellation);

    scene.querySelector('#observe-event')?.addEventListener('click', showMagicEvent);

    scene.querySelector('#astronomy-return-great-hall')?.addEventListener('click', () => {
        changeScene('great-hall');
    });
}

/* =========================
   START
========================= */

function startAstronomy() {
    const button = scene.querySelector('#use-telescope');
    const section = scene.querySelector('#constellation-section');
    const dialog = scene.querySelector('#astronomy-dialog');

    button?.classList.add('hidden');
    section?.classList.remove('hidden');

    if (dialog) {
        dialog.textContent =
            'Search the sky and discover the hidden constellations.';
    }
}

/* =========================
   CONSTELLATIONS
========================= */

function bindConstellation(button) {
    button.addEventListener('click', () => {
        const name = button.dataset.constellation;

        if (!discoveredConstellations.includes(name)) {
            discoveredConstellations.push(name);
        }

        button.disabled = true;

        updateConstellationProgress();
    });
}

function updateConstellationProgress() {
    const dialog = scene.querySelector('#astronomy-dialog');

    if (dialog) {
        dialog.textContent =
            `Constellations discovered: ${discoveredConstellations.length}/${constellations.length}`;
    }

    if (discoveredConstellations.length === constellations.length) {
        finishConstellations();
    }
}

/* =========================
   AFTER CONSTELLATIONS
========================= */

function finishConstellations() {
    scene.querySelector('#constellation-section')?.classList.add('hidden');
    scene.querySelector('#magic-event-section')?.classList.remove('hidden');

    const dialog = scene.querySelector('#astronomy-dialog');

    if (dialog) {
        dialog.textContent =
            'All constellations have been discovered. Something magical appears in the sky.';
    }
}

/* =========================
   MAGIC EVENT
========================= */

function showMagicEvent() {
    const content = scene.querySelector('#magic-event-content');

    if (content) {
        content.textContent =
            `The stars reveal a rare magical event.

Ancient wizards believed this phenomenon marked moments when powerful magic was nearby.`;
    }

    completeProgress('astronomyCompleted');

    scene.querySelector('#observe-event')?.classList.add('hidden');
    scene.querySelector('#astronomy-return-great-hall')?.classList.remove('hidden');
}