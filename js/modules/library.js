import {
    changeScene
} from '../managers/scene-manager.js';
import {
    completeProgress
} from '../core/game-state.js';

/* =========================
   SCENE
========================= */

const scene = document.querySelector('#library');

/* =========================
   RIDDLES
========================= */

const riddles = [{
        question: 'Which founder valued bravery above all?',
        answer: 'gryffindor'
    },
    {
        question: 'Which founder believed wisdom was the greatest treasure?',
        answer: 'ravenclaw'
    },
    {
        question: 'Which founder valued ambition and determination?',
        answer: 'slytherin'
    }
];

let correctAnswer = null;
let libraryCompleted = false;

/* =========================
   INIT
========================= */

export function initLibrary() {
    scene.querySelector('#search-book')?.addEventListener('click', searchBook);
    scene.querySelector('#open-book')?.addEventListener('click', openBook);
    scene.querySelector('#continue-reading')?.addEventListener('click', showRiddle);
    scene.querySelectorAll('.library-answer').forEach(bindAnswer);
    scene.querySelector('#search-again')?.addEventListener('click', resetLibrary);
    scene.querySelector('#library-return-great-hall')?.addEventListener('click', returnGreatHall);
}

/* =========================
   SEARCH BOOK
========================= */

function searchBook() {
    scene.querySelector('#library-dialog').textContent =
        'You discover an old enchanted book hidden between dusty shelves.';

    scene.querySelector('#search-book').classList.add('hidden');
    scene.querySelector('#library-book').classList.remove('hidden');
}

/* =========================
   OPEN BOOK
========================= */

function openBook() {
    scene.querySelector('#library-book').classList.add('hidden');
    scene.querySelector('#book-story').classList.remove('hidden');
}

/* =========================
   SHOW RIDDLE
========================= */

function showRiddle() {
    const randomRiddle = riddles[Math.floor(Math.random() * riddles.length)];

    correctAnswer = randomRiddle.answer;

    scene.querySelector('#library-question').textContent = randomRiddle.question;
    scene.querySelector('#book-story').classList.add('hidden');
    scene.querySelector('#library-riddle').classList.remove('hidden');
}

/* =========================
   ANSWERS
========================= */

function bindAnswer(button) {
    button.addEventListener('click', () => {
        if (libraryCompleted) return;

        button.dataset.answer === correctAnswer ?
            success() :
            fail();
    });
}

/* =========================
   SUCCESS
========================= */

function success() {
    libraryCompleted = true;

    completeProgress('libraryCompleted');

    scene.querySelector('#library-riddle').classList.add('hidden');
    scene.querySelector('#library-success').classList.remove('hidden');
}

/* =========================
   FAIL
========================= */

function fail() {
    scene.querySelector('#library-riddle').classList.add('hidden');
    scene.querySelector('#library-fail').classList.remove('hidden');

    correctAnswer = null;
}

/* =========================
   RESET
========================= */

function resetLibrary() {
    libraryCompleted = false;
    correctAnswer = null;

    scene.querySelector('#library-fail').classList.add('hidden');
    scene.querySelector('#library-success').classList.add('hidden');
    scene.querySelector('#library-riddle').classList.add('hidden');
    scene.querySelector('#book-story').classList.add('hidden');
    scene.querySelector('#library-book').classList.add('hidden');
    scene.querySelector('#search-book').classList.remove('hidden');

    scene.querySelector('#library-dialog').textContent =
        'The enchanted book has vanished. Search the shelves again.';
}

/* =========================
   RETURN
========================= */

function returnGreatHall() {
    changeScene('great-hall');
}