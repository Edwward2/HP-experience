/* =========================
   MODULES
========================= */
import {
    initIntro
} from '../modules/intro.js';
import {
    initLetter
} from '../modules/letter.js';
import {
    initDiagon
} from '../modules/diagon.js';
import {
    initOllivanders
} from '../modules/ollivanders.js';
import {
    initPets
} from '../modules/pets.js';
import {
    initWeasley
} from '../modules/weasley.js';

import {
    initStation
} from '../modules/station.js';
import {
    initTrain
} from '../modules/train.js';
import {
    initArrival
} from '../modules/arrival.js';
import {
    initLake
} from '../modules/lake.js';
import {
    initCastle
} from '../modules/castle.js';

import {
    initGreatHall
} from '../modules/great-hall.js';
import {
    initSorting
} from '../modules/sorting.js';

import {
    initAstronomy
} from '../modules/astronomy.js';
import {
    initLibrary
} from '../modules/library.js';
import {
    initGreenhouses
} from '../modules/greenhouses.js';
import {
    initQuidditch
} from '../modules/quidditch.js';
import {
    initMaraudersMap
} from '../modules/marauders-map.js';
import {
    initEnding
} from '../modules/ending.js';
/* =========================
   MANAGERS
========================= */
import {
    initializeScenes,
    showScene
} from '../managers/scene-manager.js';
/* =========================
   GAME STATE
========================= */
import {
    loadGame
} from './game-state.js';
/* =========================
   CONFIG
========================= */
import {
    CONFIG
} from './config.js';
/* =========================
APP START
========================= */
document.addEventListener(
    'DOMContentLoaded',
    initApp
);
/* =========================
INIT APP
========================= */
function initApp() {
    logStartup();
    restoreSave();
    initializeManagers();
    initializeModules();
    startExperience();
}
/* =========================
RESTORE SAVE
========================= */
function restoreSave() {
    try {
        loadGame();
    } catch (error) {
        console.error(
            'Save load error:',
            error
        );
    }
}
/* =========================
MANAGERS
========================= */
function initializeManagers() {
    initializeScenes();
}
/* =========================
START EXPERIENCE
========================= */
function startExperience() {
    showScene(
        CONFIG.SCENES.INTRO
    );
}
/* =========================
MODULES
========================= */
function initializeModules() {
    const modules = [
        initIntro,
        initLetter,
        initDiagon,
        initOllivanders,
        initPets,
        initWeasley,
        initStation,
        initTrain,
        initArrival,
        initLake,
        initCastle,
        initGreatHall,
        initSorting,
        initAstronomy,
        initLibrary,
        initGreenhouses,
        initQuidditch,
        initMaraudersMap,
        initEnding
    ];
    modules.forEach(initializeModule);
    modules.forEach(
        initializeModule
    );
}
/* =========================
SAFE MODULE INIT
========================= */
function initializeModule(
    moduleInit
) {
    try {
        moduleInit();
    } catch (error) {
        console.error(
            'Module initialization failed:',
            moduleInit.name,
            error
        );
    }
}
/* =========================
LOG
========================= */
function logStartup() {
    if (!CONFIG.DEBUG) {
        return;
    }
    console.log(
        `%c${CONFIG.APP_NAME} v${CONFIG.VERSION}`,
        'color:#d4af37;font-size:16px;font-weight:bold;'
    );
    console.log(
        '%cWizarding World Experience Initialized',
        'color:#8ac6ff;'
    );
}