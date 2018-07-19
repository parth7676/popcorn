import { LOAD_NOWPLAYING_MOVIES, SAVE_NOWPLAYING_MOVIES } from './constants';

export function laodNowPlayingMovies(apiKey, pageIndex) {
    return {
        type: LOAD_NOWPLAYING_MOVIES,
        payload: {
            apiKey,
            pageIndex,
        }
    }
}

export function saveNowPlayingMovies(movies) {
    return {
        type: SAVE_NOWPLAYING_MOVIES,
        payload: {
            data: movies,
        }
    }
}