/* =========================
STORAGE
========================= */

const STORAGE_KEY =
    'hp-game-state';

/* =========================
DEFAULT STATE
========================= */

function createDefaultState() {

    return {

        /* =========================
           PLAYER
        ========================= */

        player: {

            name: '',
        
            email: '',
        
            house: null,
        
            wandId: null,
        
            wandImage: null,
        
            petId: null,
        
            petImage: null,
        
            itemId: null,
        
            itemImage: null
        
        },

        /* =========================
           GAME
        ========================= */

        game: {

            currentChapter: 'prologue',

            currentScene: 'intro',

            completed: false

        },

        /* =========================
           INVENTORY
        ========================= */

        inventory: {

            wand: false,

            pet: false,

            robes: false,

            map: false

        },

        /* =========================
           ACHIEVEMENTS
        ========================= */

        achievements: {

            firstLetter: false,

            diagonComplete: false,

            houseSelected: false,

            snitchCaught: false,

            mapUnlocked: false

        },

        /* =========================
           SCENES
        ========================= */

        scenes: {

            intro: false,

            letter: false,

            diagon: false,

            station: false,

            train: false,

            castle: false,

            sorting: false,

            astronomy: false,

            forest: false,

            insectarium: false,

            quidditch: false,

            chamber: false,

            'marauders-map': false,

            ending: false

        },

        /* =========================
           PROGRESS
        ========================= */

        progress: {

            diagonCompleted: false,
            
            ollivandersCompleted: false,
            
            petsCompleted: false,
            
            weasleyCompleted: false,
            
            trainWindowCompleted: false,

            trainFrogCompleted: false,

            sortingCompleted: false,

            astronomyCompleted: false,

            forestCompleted: false,

            insectariumCompleted: false,

            quidditchCompleted: false,

            chamberCompleted: false,

            mapUnlocked: false

        }

    };

}

export function completeStore(
    store
) {

    if (
        store in gameState.progress
    ) {

        gameState.progress[
            store
        ] = true;

        saveGame();

    }

}

/* =========================
STATE
========================= */

const gameState =
    createDefaultState();

/* =========================
HELPERS
========================= */

function autoSave() {

    saveGame();

}

function mergeState(
    target,
    source
) {

    Object.keys(source).forEach(
        key => {

            if (

                typeof source[key] ===
                'object'

                &&

                source[key] !==
                null

                &&

                !Array.isArray(
                    source[key]
                )

            ) {

                if (!target[key]) {

                    target[key] = {};

                }

                mergeState(
                    target[key],
                    source[key]
                );

            } else {

                target[key] =
                    source[key];

            }

        }
    );

}

/* =========================
PLAYER
========================= */

export function setPlayerName(
    name
) {

    gameState.player.name =
        name?.trim() || '';

    autoSave();

}

export function getPlayerName() {

    return gameState.player.name;

}

export function setPlayerEmail(
    email
) {

    gameState.player.email =
        email?.trim() || '';

    autoSave();

}

export function getPlayerEmail() {

    return gameState.player.email;

}

export function setPlayerHouse(
    house
) {

    gameState.player.house =
        house;

    autoSave();

}

export function getPlayerHouse() {

    return gameState.player.house;

}

export function setPlayerWand(
    wandId,
    wandImage
) {

    gameState.player.wandId =
        wandId;

    gameState.player.wandImage =
        wandImage;

    gameState.progress.ollivandersCompleted =
        true;

    saveGame();
}
export function setPlayerPet(
    petId,
    petImage
) {

    gameState.player.petId =
        petId;

    gameState.player.petImage =
        petImage;

    gameState.progress.petsCompleted =
        true;

    saveGame();

}

export function getPlayerWand() {

    return {

        id:
            gameState.player.wandId,

        image:
            gameState.player.wandImage

    };

}


/* =========================
GAME
========================= */

export function setCurrentScene(
    scene
) {

    gameState.game.currentScene =
        scene;

    autoSave();

}

export function getCurrentScene() {

    return gameState.game
        .currentScene;

}

export function setCurrentChapter(
    chapter
) {

    gameState.game.currentChapter =
        chapter;

    autoSave();

}

export function getCurrentChapter() {

    return gameState.game
        .currentChapter;

}

export function completeGame() {

    gameState.game.completed =
        true;

    autoSave();

}

/* =========================
INVENTORY
========================= */

export function addItem(
    item
) {

    if (
        item in
        gameState.inventory
    ) {

        gameState.inventory[
            item
        ] = true;

        autoSave();

    }

}

export function removeItem(
    item
) {

    if (
        item in
        gameState.inventory
    ) {

        gameState.inventory[
            item
        ] = false;

        autoSave();

    }

}

export function hasItem(
    item
) {

    return !!gameState
        .inventory[item];

}

export function getInventory() {

    return {

        ...gameState.inventory

    };

}

/* =========================
ACHIEVEMENTS
========================= */

export function unlockAchievement(
    achievement
) {

    if (

        achievement in
        gameState.achievements

    ) {

        gameState.achievements[
            achievement
        ] = true;

        autoSave();

    }

}

export function hasAchievement(
    achievement
) {

    return !!gameState
        .achievements[
            achievement
        ];

}

export function getAchievements() {

    return {

        ...gameState
        .achievements

    };

}

/* =========================
SCENES
========================= */

export function completeScene(
    scene
) {

    if (
        scene in
        gameState.scenes
    ) {

        gameState.scenes[
            scene
        ] = true;

        autoSave();

    }

}

export function isSceneCompleted(
    scene
) {

    return !!gameState
        .scenes[
            scene
        ];

}

export function getScenes() {

    return {

        ...gameState.scenes

    };

}

/* =========================
PROGRESS
========================= */

export function completeProgress(
    key
) {

    if (
        key in
        gameState.progress
    ) {

        gameState.progress[
            key
        ] = true;

        autoSave();

    }

}

export function getProgress() {

    return {

        ...gameState.progress

    };

}

export function unlockMap() {

    gameState.progress
        .mapUnlocked = true;

    addItem(
        'map'
    );

    unlockAchievement(
        'mapUnlocked'
    );

    autoSave();

}

export function isMapUnlocked() {

    return gameState.progress
        .mapUnlocked;

}

/* =========================
SAVE
========================= */

export function saveGame() {

    try {

        localStorage.setItem(

            STORAGE_KEY,

            JSON.stringify(
                gameState
            )

        );

        return true;

    } catch (error) {

        console.error(
            'Save error:',
            error
        );

        return false;

    }

}

/* =========================
LOAD
========================= */

export function loadGame() {

    try {

        const savedData =

            localStorage.getItem(
                STORAGE_KEY
            );

        if (!savedData) {

            return false;

        }

        const parsedData =

            JSON.parse(
                savedData
            );

        mergeState(
            gameState,
            parsedData
        );

        return true;

    } catch (error) {

        console.error(
            'Load error:',
            error
        );

        return false;

    }

}

/* =========================
RESET
========================= */

export function resetGame() {

    localStorage.removeItem(
        STORAGE_KEY
    );

    Object.assign(
        gameState,
        createDefaultState()
    );

    location.reload();

}

/* =========================
DEBUG
========================= */

export function getGameState() {

    return structuredClone(
        gameState
    );

}

