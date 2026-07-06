import {
    changeScene
} from '../managers/scene-manager.js';
import {
    completeProgress
} from '../core/game-state.js';

const scene = document.querySelector('#greenhouses');

let correctPlant = 'mandrake';
let completed = false;

export function initGreenhouses() {

    scene.querySelector('#start-greenhouse')
        ?.addEventListener('click', startLesson);

    scene.querySelectorAll('.plant-option')
        .forEach(bindPlant);

    scene.querySelector('#return-great-hall-greenhouse')
        ?.addEventListener('click', () => {
            changeScene('great-hall');
        });
}

/* ========================= */

function startLesson() {
    scene.querySelector('#greenhouses-dialog').classList.add('hidden');
    scene.querySelector('#start-greenhouse').classList.add('hidden');
    scene.querySelector('#greenhouse-game').classList.remove('hidden');
}

/* ========================= */

function bindPlant(button) {
    button.addEventListener('click', () => {

        if (completed) return;

        const plant = button.dataset.plant;

        if (plant === correctPlant) {
            success();
        } else {
            fail();
        }
    });
}

/* ========================= */

function success() {
    completed = true;

    completeProgress('greenhousesCompleted');

    scene.querySelector('#greenhouse-game').classList.add('hidden');
    scene.querySelector('#greenhouse-result').classList.remove('hidden');

    scene.querySelector('#greenhouse-result-title').textContent = 'Correct!';
    scene.querySelector('#greenhouse-result-text').textContent =
        'You identified the correct magical plant and earned a fragment of the Marauder’s Map.';
}

/* ========================= */

function fail() {
    scene.querySelector('#greenhouse-result').classList.remove('hidden');
    scene.querySelector('#greenhouse-result-title').textContent = 'Wrong choice';
    scene.querySelector('#greenhouse-result-text').textContent =
        'The plant reacts dangerously. Try again.';
}