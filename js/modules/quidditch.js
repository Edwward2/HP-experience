import {
    changeScene
} from '../managers/scene-manager.js';
import {
    completeProgress
} from '../core/game-state.js';

const scene = document.querySelector('#quidditch');

let catches = 0;
const goal = 5;
let gameFinished = false;

export function initQuidditch() {
    scene.querySelector('#start-quidditch')
        ?.addEventListener('click', startTraining);

    scene.querySelector('#golden-snitch')
        ?.addEventListener('click', catchSnitch);

    scene.querySelector('#return-great-hall-quidditch')
        ?.addEventListener('click', () => {
            changeScene('great-hall');
        });
}

function startTraining() {
    catches = 0;
    gameFinished = false;

    scene.querySelector('#start-quidditch').classList.add('hidden');
    scene.querySelector('#quidditch-game').classList.remove('hidden');

    updateCounter();
    moveSnitch();
}

function catchSnitch() {
    if (gameFinished) return;

    catches++;

    updateCounter();

    if (catches >= goal) {
        finishTraining();
        return;
    }

    moveSnitch();
}

function updateCounter() {
    scene.querySelector('#snitch-counter').textContent =
        `Snitches Caught: ${catches} / ${goal}`;
}

function moveSnitch() {
    const snitch = scene.querySelector('#golden-snitch');

    const x = Math.random() * 750;
    const y = Math.random() * 350;

    snitch.style.left = `${x}px`;
    snitch.style.top = `${y}px`;
}

function finishTraining() {
    gameFinished = true;

    completeProgress('quidditchCompleted');

    setTimeout(() => {

        changeScene('great-hall');

    }, 2000);
    scene.querySelector('#quidditch-game').classList.add('hidden');
    scene.querySelector('#quidditch-result').classList.remove('hidden');

    scene.querySelector('#quidditch-result-title').textContent =
        'Excellent!';

    scene.querySelector('#quidditch-result-text').textContent =
        'You caught the Golden Snitch and earned another fragment of the Marauder\'s Map.';
}