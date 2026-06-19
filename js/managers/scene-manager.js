/* =========================
   CONFIG
========================= */

import {
    CONFIG
}
from '../core/config.js';

/* =========================
   STATE
========================= */

let currentScene = null;

let previousScene = null;

let isTransitioning = false;

/* =========================
   INIT
========================= */

export function initializeScenes() {

    const scenes =
        document.querySelectorAll(
            '.scene'
        );

    scenes.forEach(
        resetSceneElement
    );

}

/* =========================
   SHOW SCENE
========================= */

export function showScene(
    sceneId
) {

    if (
        !sceneExists(sceneId)
    ) {

        console.warn(
            `Scene not found: ${sceneId}`
        );

        return false;

    }

    hideAllScenes();

    const scene =
        document.querySelector(
            `#${sceneId}`
        );

    scene.classList.remove(
        'scene-hidden'
    );

    scene.classList.remove(
        'scene-fade-out'
    );

    scene.classList.add(
        'scene-active'
    );

    previousScene =
        currentScene;

    currentScene =
        sceneId;

    dispatchSceneEvent(
        'sceneChanged',
        sceneId
    );

    if (CONFIG.DEBUG) {

        console.log(
            `[SCENE] ${sceneId}`
        );

    }

    return true;

}

/* =========================
   CHANGE SCENE
========================= */

export function changeScene(
    nextScene,
    callback = null
) {

    if (
        isTransitioning
    ) {
        return;
    }

    if (
        nextScene === currentScene
    ) {
        return;
    }

    if (
        !sceneExists(nextScene)
    ) {

        console.warn(
            `Scene not found: ${nextScene}`
        );

        return;

    }

    isTransitioning = true;

    const current =
        getCurrentSceneElement();

    if (!current) {

        showScene(
            nextScene
        );

        isTransitioning =
            false;

        return;

    }

    current.classList.add(
        'scene-fade-out'
    );

    setTimeout(

        () => {

            showScene(
                nextScene
            );

            if (
                typeof callback ===
                'function'
            ) {

                callback();

            }

            isTransitioning =
                false;

        },

        CONFIG.ANIMATION
        .SCENE_FADE_DURATION

    );

}

/* =========================
   HIDE SCENE
========================= */

export function hideScene(
    sceneId
) {

    const scene =
        document.querySelector(
            `#${sceneId}`
        );

    if (!scene) return;

    resetSceneElement(
        scene
    );

}

/* =========================
   HIDE ALL
========================= */

export function hideAllScenes() {

    const scenes =
        document.querySelectorAll(
            '.scene'
        );

    scenes.forEach(
        resetSceneElement
    );

}

/* =========================
   RESET ELEMENT
========================= */

function resetSceneElement(
    scene
) {

    scene.classList.remove(
        'scene-active'
    );

    scene.classList.remove(
        'scene-fade-out'
    );

    scene.classList.add(
        'scene-hidden'
    );

}

/* =========================
   GO BACK
========================= */

export function goBack() {

    if (
        !previousScene
    ) {
        return;
    }

    changeScene(
        previousScene
    );

}

/* =========================
   CURRENT SCENE
========================= */

export function getCurrentScene() {

    return currentScene;

}

/* =========================
   CURRENT ELEMENT
========================= */

export function getCurrentSceneElement() {

    if (
        !currentScene
    ) {
        return null;
    }

    return document.querySelector(
        `#${currentScene}`
    );

}

/* =========================
   PREVIOUS SCENE
========================= */

export function getPreviousScene() {

    return previousScene;

}

/* =========================
   TRANSITION STATE
========================= */

export function isSceneTransitioning() {

    return isTransitioning;

}

/* =========================
   RESET ALL
========================= */

export function resetScenes() {

    currentScene = null;

    previousScene = null;

    isTransitioning = false;

    hideAllScenes();

}

/* =========================
   EXISTS
========================= */

export function sceneExists(
    sceneId
) {

    return Boolean(

        document.querySelector(
            `#${sceneId}`
        )

    );

}

/* =========================
   EVENTS
========================= */

function dispatchSceneEvent(
    eventName,
    sceneId
) {

    document.dispatchEvent(

        new CustomEvent(

            eventName,

            {

                detail: {

                    scene: sceneId

                }

            }

        )

    );

}