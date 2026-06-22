/* =========================
   DOM UTILITIES
========================= */

/**
 * Obtiene un elemento
 */
export function getElement(selector) {

    return document.querySelector(
        selector
    );

}

/**
 * Obtiene múltiples elementos
 */
export function getElements(selector) {

    return document.querySelectorAll(
        selector
    );

}

/**
 * Crear elemento HTML
 */
export function createElement(tag) {

    return document.createElement(
        tag
    );

}

/**
 * Agregar clase
 */
export function addClass(
    element,
    className
) {

    if (!element) return;

    element.classList.add(
        className
    );

}

/**
 * Eliminar clase
 */
export function removeClass(
    element,
    className
) {

    if (!element) return;

    element.classList.remove(
        className
    );

}

/**
 * Toggle clase
 */
export function toggleClass(
    element,
    className
) {

    if (!element) return;

    element.classList.toggle(
        className
    );

}

/**
 * Verificar clase
 */
export function hasClass(
    element,
    className
) {

    if (!element) return false;

    return element.classList.contains(
        className
    );

}

/**
 * Mostrar elemento
 */
export function showElement(
    element,
    display = 'block'
) {

    if (!element) return;

    element.style.display =
        display;

}

/**
 * Ocultar elemento
 */
export function hideElement(
    element
) {

    if (!element) return;

    element.style.display =
        'none';

}

/**
 * Cambiar contenido HTML
 */
export function setHTML(
    element,
    html
) {

    if (!element) return;

    element.innerHTML =
        html;

}

/**
 * Cambiar texto
 */
export function setText(
    element,
    text
) {

    if (!element) return;

    element.textContent =
        text;

}

/**
 * Agregar evento
 */
export function addEvent(
    element,
    eventName,
    callback
) {

    if (!element) return;

    element.addEventListener(
        eventName,
        callback
    );

}

/**
 * Eliminar evento
 */
export function removeEvent(
    element,
    eventName,
    callback
) {

    if (!element) return;

    element.removeEventListener(
        eventName,
        callback
    );

}

/**
 * Agregar hijo
 */
export function appendChild(
    parent,
    child
) {

    if (!parent || !child) return;

    parent.appendChild(
        child
    );

}

/**
 * Remover elemento
 */
export function removeElement(
    element
) {

    if (!element) return;

    element.remove();

}

/**
 * Aplicar estilos
 */
export function setStyles(
    element,
    styles
) {

    if (!element) return;

    Object.assign(
        element.style,
        styles
    );

}

/**
 * Obtener atributo
 */
export function getAttribute(
    element,
    attribute
) {

    if (!element) return null;

    return element.getAttribute(
        attribute
    );

}

/**
 * Definir atributo
 */
export function setAttribute(
    element,
    attribute,
    value
) {

    if (!element) return;

    element.setAttribute(
        attribute,
        value
    );

}

/**
 * Esperar elemento
 * útil para escenas futuras
 */
export function waitForElement(
    selector,
    timeout = 5000
) {

    return new Promise(
        (resolve, reject) => {

            const interval =
            100;

            let elapsed =
            0;

            const timer =
            setInterval(() => {

                const element =
                getElement(
                    selector
                );

                if (element) {

                    clearInterval(
                        timer
                    );

                    resolve(
                        element
                    );

                }

                elapsed +=
                interval;

                if (
                    elapsed >= timeout
                ) {

                    clearInterval(
                        timer
                    );

                    reject(
                        new Error(
                            `Element not found: ${selector}`
                        )
                    );

                }

            }, interval);

        }
    );

}