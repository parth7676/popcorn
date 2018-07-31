import { LOAD_TOPRATED_TVSHOWS, SAVE_TOPRATED_TVSHOWS } from './constants';

export function loadTopRatedTVShows(apiKey, pageIndex) {
    return {
        type: LOAD_TOPRATED_TVSHOWS,
        payload: {
            apiKey,
            pageIndex,
        }
    }
}

export function saveTopRatedTVShows(tvShows) {
    return {
        type: SAVE_TOPRATED_TVSHOWS,
        payload: {
            data: tvShows,
        }
    }
}