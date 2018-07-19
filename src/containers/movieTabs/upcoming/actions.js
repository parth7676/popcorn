import { LOAD_UPCOMING_MOVIES, SAVE_UPCOMING_MOVIES } from './constants';

export function loadUpcomingMovies(apiKey, pageIndex) {
    return {
        type: LOAD_UPCOMING_MOVIES,
        payload: {
            apiKey,
            pageIndex,
        }
    }
}

export function saveUpcomingMovies(movies) {
    return {
        type: SAVE_UPCOMING_MOVIES,
        payload: {
            data: movies,
        }
    }
}