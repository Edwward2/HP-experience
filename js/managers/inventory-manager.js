import { saveData }
from '../utils/storage.js';

import { loadData }
from '../utils/storage.js';

/* =========================
   STORAGE KEY
========================= */

const INVENTORY_KEY =
    'hp_inventory';

/* =========================
   DEFAULT INVENTORY
========================= */

const DEFAULT_INVENTORY = {

    items: [],

    collectibles: [],

    achievements: []

};

/* =========================
   GET INVENTORY
========================= */

export function getInventory() {

    const inventory =
        loadData(INVENTORY_KEY);

    if (!inventory) {

        saveData(
            INVENTORY_KEY,
            DEFAULT_INVENTORY
        );

        return structuredClone(
            DEFAULT_INVENTORY
        );
    }

    return inventory;

}

/* =========================
   SAVE INVENTORY
========================= */

function saveInventory(
    inventory
) {

    saveData(
        INVENTORY_KEY,
        inventory
    );

}

/* =========================
   ADD ITEM
========================= */

export function addItem(
    itemId
) {

    const inventory =
        getInventory();

    if (
        inventory.items.includes(
            itemId
        )
    ) {
        return;
    }

    inventory.items.push(
        itemId
    );

    saveInventory(
        inventory
    );

}

/* =========================
   REMOVE ITEM
========================= */

export function removeItem(
    itemId
) {

    const inventory =
        getInventory();

    inventory.items =
        inventory.items.filter(
            item =>
                item !== itemId
        );

    saveInventory(
        inventory
    );

}

/* =========================
   HAS ITEM
========================= */

export function hasItem(
    itemId
) {

    return getInventory()
        .items
        .includes(itemId);

}

/* =========================
   ADD COLLECTIBLE
========================= */

export function addCollectible(
    collectibleId
) {

    const inventory =
        getInventory();

    if (
        inventory.collectibles.includes(
            collectibleId
        )
    ) {
        return;
    }

    inventory.collectibles.push(
        collectibleId
    );

    saveInventory(
        inventory
    );

}

/* =========================
   HAS COLLECTIBLE
========================= */

export function hasCollectible(
    collectibleId
) {

    return getInventory()
        .collectibles
        .includes(
            collectibleId
        );

}

/* =========================
   ADD ACHIEVEMENT
========================= */

export function unlockAchievement(
    achievementId
) {

    const inventory =
        getInventory();

    if (
        inventory.achievements.includes(
            achievementId
        )
    ) {
        return;
    }

    inventory.achievements.push(
        achievementId
    );

    saveInventory(
        inventory
    );

}

/* =========================
   HAS ACHIEVEMENT
========================= */

export function hasAchievement(
    achievementId
) {

    return getInventory()
        .achievements
        .includes(
            achievementId
        );

}

/* =========================
   CLEAR INVENTORY
========================= */

export function clearInventory() {

    saveInventory(
        structuredClone(
            DEFAULT_INVENTORY
        )
    );

}

/* =========================
   DEBUG
========================= */

export function printInventory() {

    console.table(
        getInventory()
    );

}