/* =========================
   AUDIO MANAGER
========================= */

import { CONFIG }
from '../core/config.js';

/* =========================
   STATE
========================= */

const audioState = {

    music: null,

    effects: {},

    muted: false

};

/* =========================
   MUSIC
========================= */

export function playMusic(
    src,
    loop = true
) {

    stopMusic();

    const music =
    new Audio(src);

    music.loop =
        loop;

    music.volume =
        CONFIG.AUDIO?.MUSIC_VOLUME || 0.5;

    music.play();

    audioState.music =
        music;

}

export function stopMusic() {

    if (
        !audioState.music
    ) return;

    audioState.music.pause();

    audioState.music.currentTime =
        0;

    audioState.music =
        null;

}

export function pauseMusic() {

    if (
        !audioState.music
    ) return;

    audioState.music.pause();

}

export function resumeMusic() {

    if (
        !audioState.music
    ) return;

    audioState.music.play();

}

/* =========================
   EFFECTS
========================= */

export function playEffect(
    name,
    src
) {

    const effect =
    new Audio(src);

    effect.volume =
        CONFIG.AUDIO?.EFFECTS_VOLUME || 0.8;

    effect.play();

    audioState.effects[name] =
        effect;

}

/* =========================
   VOLUME
========================= */

export function setMusicVolume(
    volume
) {

    if (
        audioState.music
    ) {

        audioState.music.volume =
            volume;

    }

}

export function setEffectsVolume(
    volume
) {

    Object.values(
        audioState.effects
    ).forEach(

        effect => {

            effect.volume =
                volume;

        }

    );

}

/* =========================
   MUTE
========================= */

export function toggleMute() {

    audioState.muted =
        !audioState.muted;

    const volume =
        audioState.muted
            ? 0
            : 1;

    if (
        audioState.music
    ) {

        audioState.music.volume =
            volume *
            (CONFIG.AUDIO?.MUSIC_VOLUME || 0.5);

    }

    Object.values(
        audioState.effects
    ).forEach(

        effect => {

            effect.volume =
                volume *
                (CONFIG.AUDIO?.EFFECTS_VOLUME || 0.8);

        }

    );

}

/* =========================
   GETTERS
========================= */

export function isMuted() {

    return audioState.muted;

}

export function getAudioState() {

    return structuredClone(
        audioState
    );

}