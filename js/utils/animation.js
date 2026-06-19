/* =========================
   ANIMATION UTILITIES
========================= */

import { CONFIG }
from '../core/config.js';

/* =========================
   FADE IN
========================= */

export function fadeIn(
    element,
    duration = 1000
) {

    if (!element) return;

    element.animate(

        [
            {
                opacity: 0
            },
            {
                opacity: 1
            }
        ],

        {
            duration,
            fill: 'forwards',
            easing: 'ease'
        }

    );

}

/* =========================
   FADE OUT
========================= */

export function fadeOut(
    element,
    duration = 1000
) {

    if (!element) return;

    element.animate(

        [
            {
                opacity: 1
            },
            {
                opacity: 0
            }
        ],

        {
            duration,
            fill: 'forwards',
            easing: 'ease'
        }

    );

}

/* =========================
   SCALE IN
========================= */

export function scaleIn(
    element,
    duration = 800
) {

    if (!element) return;

    element.animate(

        [
            {
                opacity: 0,
                transform:
                'scale(.8)'
            },

            {
                opacity: 1,
                transform:
                'scale(1)'
            }

        ],

        {
            duration,
            fill: 'forwards',
            easing:
            'ease-out'
        }

    );

}

/* =========================
   SCALE OUT
========================= */

export function scaleOut(
    element,
    duration = 800
) {

    if (!element) return;

    element.animate(

        [
            {
                opacity: 1,
                transform:
                'scale(1)'
            },

            {
                opacity: 0,
                transform:
                'scale(1.2)'
            }

        ],

        {
            duration,
            fill: 'forwards',
            easing:
            'ease-in'
        }

    );

}

/* =========================
   SLIDE UP
========================= */

export function slideUp(
    element,
    duration = 800
) {

    if (!element) return;

    element.animate(

        [
            {
                opacity: 0,
                transform:
                'translateY(80px)'
            },

            {
                opacity: 1,
                transform:
                'translateY(0)'
            }

        ],

        {
            duration,
            fill: 'forwards',
            easing:
            'ease-out'
        }

    );

}

/* =========================
   SLIDE DOWN
========================= */

export function slideDown(
    element,
    duration = 800
) {

    if (!element) return;

    element.animate(

        [
            {
                opacity: 0,
                transform:
                'translateY(-80px)'
            },

            {
                opacity: 1,
                transform:
                'translateY(0)'
            }

        ],

        {
            duration,
            fill: 'forwards',
            easing:
            'ease-out'
        }

    );

}

/* =========================
   FLOAT EFFECT
========================= */

export function floatElement(
    element,
    distance = 20,
    duration = 3000
) {

    if (!element) return;

    return element.animate(

        [

            {
                transform:
                'translateY(0px)'
            },

            {
                transform:
                `translateY(-${distance}px)`
            },

            {
                transform:
                'translateY(0px)'
            }

        ],

        {

            duration,

            iterations:
            Infinity,

            easing:
            'ease-in-out'

        }

    );

}

/* =========================
   PULSE EFFECT
========================= */

export function pulseElement(
    element,
    duration = 2000
) {

    if (!element) return;

    return element.animate(

        [

            {
                transform:
                'scale(1)'
            },

            {
                transform:
                'scale(1.05)'
            },

            {
                transform:
                'scale(1)'
            }

        ],

        {

            duration,

            iterations:
            Infinity

        }

    );

}

/* =========================
   ROTATE CONTINUOUS
========================= */

export function rotateElement(
    element,
    duration = 10000
) {

    if (!element) return;

    return element.animate(

        [

            {
                transform:
                'rotate(0deg)'
            },

            {
                transform:
                'rotate(360deg)'
            }

        ],

        {

            duration,

            iterations:
            Infinity

        }

    );

}

/* =========================
   MAGIC APPEAR
========================= */

export function magicAppear(
    element
) {

    if (!element) return;

    element.animate(

        [

            {
                opacity: 0,

                filter:
                'blur(15px)',

                transform:
                'scale(.7)'
            },

            {
                opacity: 1,

                filter:
                'blur(0px)',

                transform:
                'scale(1)'
            }

        ],

        {

            duration: 1200,

            fill: 'forwards',

            easing:
            'ease-out'

        }

    );

}

/* =========================
   MAGIC DISAPPEAR
========================= */

export function magicDisappear(
    element
) {

    if (!element) return;

    element.animate(

        [

            {
                opacity: 1,

                filter:
                'blur(0px)',

                transform:
                'scale(1)'
            },

            {
                opacity: 0,

                filter:
                'blur(15px)',

                transform:
                'scale(1.3)'
            }

        ],

        {

            duration: 1200,

            fill: 'forwards',

            easing:
            'ease-in'

        }

    );

}

/* =========================
   HEDWIG FLIGHT
========================= */

export function flyToTarget(
    element,
    x,
    y,
    duration =
    CONFIG.ANIMATION
    .HEDWIG_FLIGHT_DURATION
) {

    if (!element) return;

    return element.animate(

        [

            {
                transform:
                'translate(0,0) scale(.2)'
            },

            {
                transform:
                `translate(${x}px, ${y}px) scale(1)`
            }

        ],

        {

            duration,

            fill:
            'forwards',

            easing:
            'ease-out'

        }

    );

}

/* =========================
   WAIT
========================= */

export function wait(
    milliseconds
) {

    return new Promise(
        resolve => {

            setTimeout(

                resolve,

                milliseconds

            );

        }
    );

}