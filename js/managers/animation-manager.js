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
            easing: 'ease',
            fill: 'forwards'
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

    return element.animate(

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
            easing: 'ease',
            fill: 'forwards'
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
                transform: 'scale(.5)'
            },

            {
                opacity: 1,
                transform: 'scale(1)'
            }
        ],

        {
            duration,
            easing: 'ease-out',
            fill: 'forwards'
        }

    );

}

/* =========================
   FLOAT EFFECT
========================= */

export function floatElement(
    element
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
                    'translateY(-15px)'
            },

            {
                transform:
                    'translateY(0px)'
            }

        ],

        {
            duration: 2500,
            iterations: Infinity,
            easing: 'ease-in-out'
        }

    );

}

/* =========================
   MAGIC PULSE
========================= */

export function magicPulse(
    element
) {

    if (!element) return;

    return element.animate(

        [
            {
                transform: 'scale(1)'
            },

            {
                transform: 'scale(1.05)'
            },

            {
                transform: 'scale(1)'
            }

        ],

        {
            duration: 1800,
            iterations: Infinity,
            easing: 'ease-in-out'
        }

    );

}

/* =========================
   HEDWIG FLIGHT
========================= */

export function flyToScreen(
    element,
    onFinish = null
) {

    if (!element) return;

    const animation =
    element.animate(

        [
            {
                transform:
                    'translate(-50%, -50%) scale(.15)',

                opacity: .3
            },

            {
                transform:
                    'translate(-50%, -50%) scale(.6)',

                opacity: .7
            },

            {
                transform:
                    'translate(-50%, -50%) scale(1)',

                opacity: 1
            }

        ],

        {
            duration: 5000,
            easing: 'ease-out',
            fill: 'forwards'
        }

    );

    animation.onfinish =
    () => {

        if (onFinish) {

            onFinish();

        }

    };

}

/* =========================
   SHAKE
========================= */

export function shake(
    element
) {

    if (!element) return;

    element.animate(

        [

            {
                transform:
                    'translateX(0px)'
            },

            {
                transform:
                    'translateX(-5px)'
            },

            {
                transform:
                    'translateX(5px)'
            },

            {
                transform:
                    'translateX(-5px)'
            },

            {
                transform:
                    'translateX(0px)'
            }

        ],

        {
            duration: 300
        }

    );

}

/* =========================
   ROTATE CONTINUOUS
========================= */

export function rotateInfinite(
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
            iterations: Infinity,
            easing: 'linear'
        }

    );

}

/* =========================
   SLIDE UP
========================= */

export function slideUp(
    element,
    duration = 1000
) {

    if (!element) return;

    element.animate(

        [
            {
                opacity: 0,
                transform:
                    'translateY(100px)'
            },

            {
                opacity: 1,
                transform:
                    'translateY(0px)'
            }

        ],

        {
            duration,
            easing: 'ease-out',
            fill: 'forwards'
        }

    );

}

/* =========================
   SLIDE DOWN
========================= */

export function slideDown(
    element,
    duration = 1000
) {

    if (!element) return;

    element.animate(

        [
            {
                opacity: 0,
                transform:
                    'translateY(-100px)'
            },

            {
                opacity: 1,
                transform:
                    'translateY(0px)'
            }

        ],

        {
            duration,
            easing: 'ease-out',
            fill: 'forwards'
        }

    );

}