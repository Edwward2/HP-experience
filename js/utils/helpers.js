/* =========================
   DOM HELPERS
========================= */

export function $(selector) {

    return document.querySelector(
        selector
    );

}

export function $$(selector) {

    return document.querySelectorAll(
        selector
    );

}

/* =========================
   EVENTS
========================= */

export function on(
    element,
    event,
    callback
) {

    if (!element) return;

    element.addEventListener(
        event,
        callback
    );

}

/* =========================
   CLASSES
========================= */

export function addClass(
    element,
    className
) {

    if (!element) return;

    element.classList.add(
        className
    );

}

export function removeClass(
    element,
    className
) {

    if (!element) return;

    element.classList.remove(
        className
    );

}

/* =========================
   RANDOM
========================= */

export function random(
    min,
    max
) {

    return Math.floor(

        Math.random()

        * (max - min + 1)

    ) + min;

}