import { LOAD_POPULAR_MOVIES, SAVE_POPULAR_MOVIES } from './constants';

export function loadPopularMovies(apiKey, pageIndex) {
    return {
        type: LOAD_POPULAR_MOVIES,
        payload: {
            apiKey,
            pageIndex,
        }
    }
}

export function savePopularMovies(movies) {
    return {
        type: SAVE_POPULAR_MOVIES,
        payload: {
            data: movies,
        }
    }
}