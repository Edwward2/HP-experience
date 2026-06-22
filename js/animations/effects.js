/* =========================
   VISUAL EFFECTS
========================= */

export function fadeIn(element) {

    if (!element) return;

    element.style.opacity = '1';

}

export function fadeOut(element) {

    if (!element) return;

    element.style.opacity = '0';

}

export function addMagicGlow(element) {

    if (!element) return;

    element.classList.add(
        'magic-glow'
    );

}

export function removeMagicGlow(element) {

    if (!element) return;

    element.classList.remove(
        'magic-glow'
    );

}