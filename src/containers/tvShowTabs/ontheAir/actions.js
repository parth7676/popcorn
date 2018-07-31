import { LOAD_ONTHEAIR_TVSHOWS, SAVE_ONTHEAIR_TVSHOWS } from './constants';

export function laodOnTheAirTVShows(apiKey, pageIndex) {
    return {
        type: LOAD_ONTHEAIR_TVSHOWS,
        payload: {
            apiKey,
            pageIndex,
        }
    }
}

export function saveOnTheAirTVShows(tvShows) {
    return {
        type: SAVE_ONTHEAIR_TVSHOWS,
        payload: {
            data: tvShows,
        }
    }
}