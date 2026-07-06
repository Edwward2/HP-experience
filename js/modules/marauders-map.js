import {
    changeScene
} from '../managers/scene-manager.js';
import {
    completeProgress
} from '../core/game-state.js';

const scene = document.querySelector('#marauders-map');

let footprintInterval = null;

export function initMaraudersMap() {

    scene.querySelector('#open-map')
        ?.addEventListener('click', openMap);

    scene.querySelector('#close-map')
        ?.addEventListener('click', closeMap);
}

/* ==========================
   OPEN MAP
========================== */

function openMap() {

    scene.querySelector('#open-map').classList.add('hidden');

    scene.querySelector('#marauders-map-image')
        .classList.add('open');

    scene.querySelector('#map-content')
        .classList.remove('hidden');

    createFootprints();

    setTimeout(() => {

        scene.querySelector('#chamber-marker')
            .classList.remove('hidden');

        scene.querySelector('#map-message')
            .classList.remove('hidden');

        scene.querySelector('#close-map')
            .classList.remove('hidden');

        completeProgress('maraudersMapCompleted');

    }, 3000);
}

/* ==========================
   FOOTPRINTS
========================== */

function createFootprints() {

    const container = scene.querySelector('#footprints');

    footprintInterval = setInterval(() => {

        const footprint = document.createElement('div');

        footprint.className = 'footprint';

        footprint.textContent = '👣';

        footprint.style.left = `${Math.random() * 85 + 5}%`;

        footprint.style.top = `${Math.random() * 85 + 5}%`;

        container.appendChild(footprint);

        setTimeout(() => {
            footprint.remove();
        }, 1800);

    }, 250);
}

/* ==========================
   CLOSE MAP
========================== */

function closeMap() {

    clearInterval(footprintInterval);

    scene.querySelector('#marauders-map-image')
        .classList.remove('open');

    changeScene('ending');
}