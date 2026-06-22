/* =========================
   RANDOM UTILITIES
========================= */

/* =========================
   RANDOM INTEGER
========================= */

export function randomInt(
    min,
    max
) {

    return Math.floor(

        Math.random()

        * (max - min + 1)

    ) + min;

}

/* =========================
   RANDOM FLOAT
========================= */

export function randomFloat(
    min,
    max
) {

    return (

        Math.random()

        * (max - min)

    ) + min;

}

/* =========================
   RANDOM BOOLEAN
========================= */

export function randomBoolean() {

    return Math.random() >= 0.5;

}

/* =========================
   RANDOM ARRAY ITEM
========================= */

export function randomItem(
    array
) {

    if (
        !Array.isArray(array) ||
        array.length === 0
    ) {

        return null;

    }

    return array[
        randomInt(
            0,
            array.length - 1
        )
    ];

}

/* =========================
   RANDOM ARRAY INDEX
========================= */

export function randomIndex(
    array
) {

    if (
        !Array.isArray(array) ||
        array.length === 0
    ) {

        return -1;

    }

    return randomInt(
        0,
        array.length - 1
    );

}

/* =========================
   RANDOM PERCENT
========================= */

export function randomPercent() {

    return randomInt(
        0,
        100
    );

}

/* =========================
   CHANCE
========================= */

export function chance(
    percentage
) {

    return (

        Math.random() * 100

    ) <= percentage;

}

/* =========================
   RANDOM POSITION
========================= */

export function randomPosition() {

    return {

        x: randomFloat(
            0,
            window.innerWidth
        ),

        y: randomFloat(
            0,
            window.innerHeight
        )

    };

}

/* =========================
   RANDOM VIEWPORT %
========================= */

export function randomViewportPosition() {

    return {

        x: randomFloat(
            0,
            100
        ),

        y: randomFloat(
            0,
            100
        )

    };

}

/* =========================
   RANDOM COLOR
========================= */

export function randomColor() {

    const letters =

    '0123456789ABCDEF';

    let color = '#';

    for (
        let i = 0;
        i < 6;
        i++
    ) {

        color +=

        letters[
            Math.floor(
                Math.random() * 16
            )
        ];

    }

    return color;

}

/* =========================
   RANDOM ID
========================= */

export function randomId(
    prefix = 'id'
) {

    return `${prefix}_${

        Date.now()

    }_${

        Math.floor(
            Math.random() * 100000
        )

    }`;

}

/* =========================
   SHUFFLE ARRAY
========================= */

export function shuffleArray(
    array
) {

    if (
        !Array.isArray(array)
    ) {

        return [];

    }

    const copy =

    [...array];

    for (

        let i =
        copy.length - 1;

        i > 0;

        i--

    ) {

        const j =

        Math.floor(
            Math.random() * (i + 1)
        );

        [

            copy[i],
            copy[j]

        ] = [

            copy[j],
            copy[i]

        ];

    }

    return copy;

}

/* =========================
   RANDOM ANGLE
========================= */

export function randomAngle() {

    return randomInt(
        0,
        360
    );

}

/* =========================
   RANDOM DIRECTION
========================= */

export function randomDirection() {

    return randomItem([

        'up',
        'down',
        'left',
        'right'

    ]);

}

/* =========================
   RANDOM STAR SIZE
========================= */

export function randomStarSize() {

    return randomFloat(
        1,
        4
    );

}

/* =========================
   RANDOM STAR SPEED
========================= */

export function randomStarSpeed() {

    return randomFloat(
        2,
        7
    );

}

/* =========================
   RANDOM MAGIC INTENSITY
========================= */

export function randomMagicIntensity() {

    return randomFloat(
        0.3,
        1
    );

}