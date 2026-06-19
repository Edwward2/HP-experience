/* =========================
   STORAGE UTILITIES
========================= */

const PREFIX =
'HPX_';

/* =========================
   BUILD KEY
========================= */

function buildKey(key) {

    return `${PREFIX}${key}`;

}

/* =========================
   SAVE
========================= */

export function saveData(
    key,
    value
) {

    try {

        localStorage.setItem(

            buildKey(key),

            JSON.stringify(
                value
            )

        );

        return true;

    }

    catch (error) {

        console.error(
            'Storage Save Error:',
            error
        );

        return false;

    }

}

/* =========================
   LOAD
========================= */

export function loadData(
    key,
    defaultValue = null
) {

    try {

        const data =

        localStorage.getItem(
            buildKey(key)
        );

        if (data === null) {

            return defaultValue;

        }

        return JSON.parse(
            data
        );

    }

    catch (error) {

        console.error(
            'Storage Load Error:',
            error
        );

        return defaultValue;

    }

}

/* =========================
   REMOVE
========================= */

export function removeData(
    key
) {

    try {

        localStorage.removeItem(
            buildKey(key)
        );

        return true;

    }

    catch (error) {

        console.error(
            'Storage Remove Error:',
            error
        );

        return false;

    }

}

/* =========================
   EXISTS
========================= */

export function hasData(
    key
) {

    return (

        localStorage.getItem(
            buildKey(key)
        )

        !== null

    );

}

/* =========================
   CLEAR PROJECT DATA
========================= */

export function clearProjectData() {

    Object.keys(
        localStorage
    )

    .forEach(key => {

        if (
            key.startsWith(
                PREFIX
            )
        ) {

            localStorage.removeItem(
                key
            );

        }

    });

}

/* =========================
   SAVE GAME STATE
========================= */

export function saveGameState(
    gameState
) {

    return saveData(
        'gameState',
        gameState
    );

}

/* =========================
   LOAD GAME STATE
========================= */

export function loadGameState() {

    return loadData(
        'gameState',
        null
    );

}

/* =========================
   SAVE PLAYER
========================= */

export function savePlayer(
    player
) {

    return saveData(
        'player',
        player
    );

}

/* =========================
   LOAD PLAYER
========================= */

export function loadPlayer() {

    return loadData(
        'player',
        null
    );

}

/* =========================
   SAVE INVENTORY
========================= */

export function saveInventory(
    inventory
) {

    return saveData(
        'inventory',
        inventory
    );

}

/* =========================
   LOAD INVENTORY
========================= */

export function loadInventory() {

    return loadData(
        'inventory',
        []
    );

}

/* =========================
   SAVE SETTINGS
========================= */

export function saveSettings(
    settings
) {

    return saveData(
        'settings',
        settings
    );

}

/* =========================
   LOAD SETTINGS
========================= */

export function loadSettings() {

    return loadData(
        'settings',
        {}
    );

}

/* =========================
   RESET ALL
========================= */

export function resetGame() {

    clearProjectData();

    console.log(
        'Game data reset'
    );

}