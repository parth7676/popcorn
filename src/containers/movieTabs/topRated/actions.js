import { LOAD_TOPRATED_MOVIES, SAVE_TOPRATED_MOVIES } from './constants';

export function loadTopRatedMovies(apiKey, pageIndex) {
    return {
        type: LOAD_TOPRATED_MOVIES,
        payload: {
            apiKey,
            pageIndex,
        }
    }
}

export function saveTopRatedMovies(movies) {
    return {
        type: SAVE_TOPRATED_MOVIES,
        payload: {
            data: movies,
        }
    }
}