import { take, cancel, takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { LOAD_TVSHOW_DETAILS, LOAD_TVSHOW_EXTERNAL_IDS, LOAD_TVSHOW_CAST, LOAD_TVSHOW_POSTERS } from './constants';
import { saveTVShowCast, saveTVShowDetails, saveTVShowExternalIds, saveTVShowPosters } from './actions';
import { BASE_URL } from '../../constants';

export function* loadTVShowDetailsSagas() {
    yield takeEvery(LOAD_TVSHOW_DETAILS, loadTVShowDetailsAsync);
}

function* loadTVShowDetailsAsync(action) {
    const response = yield call(axios.get, `${BASE_URL}tv/${action.payload.id}?api_key=${action.payload.apiKey}`);
    if (response.status === 200) {
        yield put(saveTVShowDetails(response.data));
    }
}

export function* loadTVShowExternalIdsSagas() {
    yield takeEvery(LOAD_TVSHOW_EXTERNAL_IDS, loadTVShowExternalIdsAsync);
}

function* loadTVShowExternalIdsAsync(action) {
    const response = yield call(axios.get, `${BASE_URL}tv/${action.payload.id}/external_ids?api_key=${action.payload.apiKey}`);
    if (response.status === 200) {
        yield put(saveTVShowExternalIds(response.data));
    }
}

export function* loadTVShowCastSagas() {
    yield takeEvery(LOAD_TVSHOW_CAST, loadTVShowCastAsync);
}

function* loadTVShowCastAsync(action) {
    const response = yield call(axios.get, `${BASE_URL}tv/${action.payload.id}/credits?api_key=${action.payload.apiKey}`);
    if (response.status === 200) {
        yield put(saveTVShowCast(response.data));
    }
}

export function* loadTVShowPostersSagas() {
    yield takeEvery(LOAD_TVSHOW_POSTERS, loadTVShowPostersAsync);
}

function* loadTVShowPostersAsync(action) {
    const response = yield call(axios.get, `${BASE_URL}tv/${action.payload.id}/images?api_key=${action.payload.apiKey}`);
    if (response.status === 200) {
        yield put(saveTVShowPosters(response.data));
    }
}
