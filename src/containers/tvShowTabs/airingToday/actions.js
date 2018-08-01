import { LOAD_AIRING_TODAY_TVSHOWS, SAVE_AIRING_TODAY_TVSHOWS } from './constants';

export function laodAiringTodayTVShows(apiKey, pageIndex) {
    return {
        type: LOAD_AIRING_TODAY_TVSHOWS,
        payload: {
            apiKey,
            pageIndex,
        }
    }
}

export function saveAiringTodayTVShows(tvShows) {
    return {
        type: SAVE_AIRING_TODAY_TVSHOWS,
        payload: {
            data: tvShows,
        }
    }
} 