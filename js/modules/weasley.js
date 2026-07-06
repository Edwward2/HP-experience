import {
    changeScene
}
from '../managers/scene-manager.js';

import {
    completeProgress,
    getProgress
}
from '../core/game-state.js';

let foundObjects = 0;

export function initWeasley() {

    const startButton =

        document.querySelector(
            '#start-weasley-search'
        );

    const searchArea =

        document.querySelector(
            '#weasley-search'
        );

    const dialog =

        document.querySelector(
            '#weasley-dialog'
        );

    const returnButton =

        document.querySelector(
            '#return-diagon-weasley'
        );

    const progress =
        getProgress();

    if (
        progress.weasleyCompleted
    ) {

        dialog.textContent =

            'All magical objects have already been found.';

        startButton?.remove();

        returnButton?.classList.remove(
            'hidden'
        );

        return;
    }

    startButton?.addEventListener(

        'click',

        () => {

            searchArea?.classList.remove(
                'hidden'
            );

            startButton.classList.add(
                'hidden'
            );

        }

    );

    document
        .querySelectorAll(
            '#weasley-checklist button'
        )
        .forEach(

            button => {

                button.addEventListener(

                    'click',

                    () => {

                        if (
                            button.disabled
                        ) {
                            return;
                        }

                        button.disabled = true;

                        button.textContent =
                            '✓ Found';

                        foundObjects++;

                        dialog.textContent =

                            `Found ${foundObjects} of 10 magical objects`;

                        if (
                            foundObjects === 10
                        ) {

                            dialog.textContent =

                                'All magical objects found!';

                            completeProgress(
                                'weasleyCompleted'
                            );

                            returnButton?.classList.remove(
                                'hidden'
                            );

                        }

                    }

                );

            }

        );

    returnButton?.addEventListener(

        'click',

        () => {

            changeScene(
                'diagon'
            );

        }

    );

}