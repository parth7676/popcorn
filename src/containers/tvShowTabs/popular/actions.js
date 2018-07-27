import { LOAD_POPULAR_TVSHOWS, SAVE_POPULAR_TVSHOWS } from './constants';

export function loadPopularTVShows(apiKey, pageIndex) {
    return {
        type: LOAD_POPULAR_TVSHOWS,
        payload: {
            apiKey,
            pageIndex,
        }
    }
}

export function savePopularTVShows(tvShows) {
    return {
        type: SAVE_POPULAR_TVSHOWS,
        payload: {
            data: tvShows,
        }
    }
}