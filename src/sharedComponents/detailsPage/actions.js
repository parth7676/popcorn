import {
    LOAD_MOVIE_DETAILS,
    SAVE_MOVIE_DETAILS,
    LOAD_MOVIE_EXTERNAL_IDS,
    SAVE_MOVIE_EXTERNAL_IDS,
    LOAD_MOVIE_CAST,
    SAVE_MOVIE_CAST
} from './constants';

export function loadMovieDetails(apiKey, id) {
    return ({
        type: LOAD_MOVIE_DETAILS,
        payload: {
            apiKey,
            id
        }
    })
}

export function saveMovieDetails(movieDetails) {
    return ({
        type: SAVE_MOVIE_DETAILS,
        payload: {
            data: movieDetails
        }
    })
}

export function loadMovieExternalIds(apiKey, id) {
    return ({
        type: LOAD_MOVIE_EXTERNAL_IDS,
        payload: {
            apiKey,
            id
        }
    })
}

export function saveMovieExternalIds(externalIds) {
    return ({
        type: SAVE_MOVIE_EXTERNAL_IDS,
        payload: {
            data: externalIds
        }
    })
}

export function loadMovieCast(apiKey, id) {
    return ({
        type: LOAD_MOVIE_CAST,
        payload: {
            apiKey,
            id
        }
    })
}

export function saveMovieCast(movieCast) {
    return ({
        type: SAVE_MOVIE_CAST,
        payload: {
            data: movieCast
        }
    })
}