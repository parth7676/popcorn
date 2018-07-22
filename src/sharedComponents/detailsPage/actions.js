import { LOAD_MOVIE_DETAILS, Save_MOVIE_DETAILS } from './constants';

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
        type: Save_MOVIE_DETAILS,
        payload: {
            data: movieDetails
        }
    })
}