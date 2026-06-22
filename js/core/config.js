/* =========================
APP CONFIG
========================= */

export const CONFIG = {

    /* =========================
       APP
    ========================= */

    APP_NAME: 'Harry Potter Experience',

    VERSION: '1.0.0',

    DEBUG: true,

    SAVE_PROGRESS: true,

    /* =========================
       STORAGE
    ========================= */

    STORAGE: {

        SAVE_KEY: 'hp-game-state'

    },

    /* =========================
       ANIMATION
    ========================= */

    ANIMATION: {

        LETTER_ROTATION_SPEED: 40,

        TRANSITION_DURATION: 1000,

        SCENE_FADE_DURATION: 1200,

        HEDWIG_FLIGHT_DURATION: 6000,

        HEDWIG_FADE_DURATION: 1200,

        FOG_SPEED: 25000,

        MAGIC_EFFECT_DURATION: 1500

    },

    /* =========================
       INTRO
    ========================= */

    INTRO: {

        STAR_COUNT: 250,

        MIN_STAR_SIZE: 1,

        MAX_STAR_SIZE: 4

    },

    /* =========================
       PLAYER
    ========================= */

    PLAYER: {

        MAX_NAME_LENGTH: 30

    },

    /* =========================
       SCENES
    ========================= */

    SCENES: {

        INTRO: 'intro',

        LETTER: 'letter',

        DIAGON: 'diagon',

        STATION: 'station',

        TRAIN: 'train',

        ARRIVAL_HOGWARTS: 'arrival-hogwarts',

        LAKE_PATH: 'lake-path',

        BLACK_LAKE: 'black-lake',

        CASTLE: 'castle',

        GREAT_HALL: 'great-hall',

        SORTING: 'sorting',

        COURTYARD: 'courtyard',

        ASTRONOMY: 'astronomy',

        FOREST: 'forest',

        INSECTARIUM: 'insectarium',

        QUIDDITCH: 'quidditch',

        CHAMBER: 'chamber',

        MARAUDERS_MAP: 'marauders-map',

        ENDING: 'ending',

        /* =========================
           FUTURE EXPANSIONS
        ========================= */

        HEADMASTER: 'headmaster',

        PENSIEVE: 'pensieve',

        HERBOLOGY: 'herbology',

        AZKABAN: 'azkaban',

        DRAGON: 'dragon',

        DEMENTORS: 'dementors'

    },

    /* =========================
       INVENTORY
    ========================= */

    INVENTORY: {

        REQUIRED_ITEMS: [

            'wand',

            'pet',

            'robes'

        ]

    },

    /* =========================
       QUIDDITCH
    ========================= */

    QUIDDITCH: {

        GAME_DURATION: 60,

        REQUIRED_POINTS: 100,

        SNITCH_SPEED: 5

    },

    /* =========================
       AUDIO
    ========================= */

    AUDIO: {

        MASTER_VOLUME: 0.7,

        MUSIC_VOLUME: 0.6,

        EFFECTS_VOLUME: 0.8

    },

    /* =========================
       DEBUG
    ========================= */

    DEBUG_OPTIONS: {

        SHOW_SCENE_LOGS: true,

        SHOW_INVENTORY_LOGS: true

    },

    /* =========================
       ASSETS
    ========================= */

    ASSETS: {

        MOON: './assets/images/moon/moon.png',

        HEDWIG: './assets/images/hedwig/hedwig.png',

        ENVELOPE: './assets/images/letter/envelope.jpg',

        LETTER: './assets/images/letter/letter.jpg',

        SEAL: './assets/images/letter/seal.png'

    }

};