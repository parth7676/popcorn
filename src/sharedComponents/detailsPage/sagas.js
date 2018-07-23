import { take, cancel, takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { LOAD_MOVIE_DETAILS, LOAD_MOVIE_EXTERNAL_IDS, LOAD_MOVIE_CAST } from './constants';
import { saveMovieDetails, saveMovieExternalIds, saveMovieCast } from './actions';
import { BASE_URL } from '../../constants';

export function* loadMovieDetailsSagas() {
    yield takeEvery(LOAD_MOVIE_DETAILS, loadMovieDetailsAsync);
}

function* loadMovieDetailsAsync(action) {
    const response = yield call(axios.get, `${BASE_URL}movie/${action.payload.id}?api_key=${action.payload.apiKey}`);
    if (response.status === 200) {
        yield put(saveMovieDetails(response.data));
    }
}

export function* loadMovieExternalIdsSagas() {
    yield takeEvery(LOAD_MOVIE_EXTERNAL_IDS, loadMovieExternalIdsAsync);
}

function* loadMovieExternalIdsAsync(action) {
    const response = yield call(axios.get, `${BASE_URL}movie/${action.payload.id}/external_ids?api_key=${action.payload.apiKey}`);
    if (response.status === 200) {
        yield put(saveMovieExternalIds(response.data));
    }
}

export function* loadCastSagas() {
    yield takeEvery(LOAD_MOVIE_CAST, loadCastAsync);
}

function* loadCastAsync(action) {
    const response = yield call(axios.get, `${BASE_URL}movie/${action.payload.id}/credits?api_key=${action.payload.apiKey}`);
    if (response.status === 200) {
        yield put(saveMovieCast(response.data));
    }
}
