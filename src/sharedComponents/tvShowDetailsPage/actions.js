import {
    LOAD_TVSHOW_DETAILS,
    SAVE_TVSHOW_DETAILS,
    LOAD_TVSHOW_EXTERNAL_IDS,
    SAVE_TVSHOW_EXTERNAL_IDS,
    LOAD_TVSHOW_CAST,
    SAVE_TVSHOW_CAST,
    LOAD_TVSHOW_POSTERS,
    SAVE_TVSHOW_POSTERS
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

export function loadTVShowPosters(apiKey, id) {
    return ({
        type: LOAD_TVSHOW_POSTERS,
        payload: {
            apiKey,
            id
        }
    })
}

export function saveTVShowPosters(posters) {
    return ({
        type: SAVE_TVSHOW_POSTERS,
        payload: {
            data: posters
        }
    })
}