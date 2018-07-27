import {
    LOAD_TVSHOW_DETAILS,
    SAVE_TVSHOW_DETAILS,
    LOAD_TVSHOW_EXTERNAL_IDS,
    SAVE_TVSHOW_EXTERNAL_IDS,
    LOAD_TVSHOW_CAST,
    SAVE_TVSHOW_CAST
} from './constants';

export function loadTVShowDetails(apiKey, id) {
    return ({
        type: LOAD_TVSHOW_DETAILS,
        payload: {
            apiKey,
            id
        }
    })
}

export function saveTVShowDetails(tvShowDetails) {
    return ({
        type: SAVE_TVSHOW_DETAILS,
        payload: {
            data: tvShowDetails
        }
    })
}

export function loadTVShowExternalIds(apiKey, id) {
    return ({
        type: LOAD_TVSHOW_EXTERNAL_IDS,
        payload: {
            apiKey,
            id
        }
    })
}

export function saveTVShowExternalIds(externalIds) {
    return ({
        type: SAVE_TVSHOW_EXTERNAL_IDS,
        payload: {
            data: externalIds
        }
    })
}

export function loadTVShowCast(apiKey, id) {
    return ({
        type: LOAD_TVSHOW_CAST,
        payload: {
            apiKey,
            id
        }
    })
}

export function saveTVShowCast(tvShowCast) {
    return ({
        type: SAVE_TVSHOW_CAST,
        payload: {
            data: tvShowCast
        }
    })
}