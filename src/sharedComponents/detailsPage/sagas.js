import { take, cancel, takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { LOAD_MOVIE_DETAILS } from './constants';
import { saveMovieDetails } from './actions';
import { BASE_URL } from '../../constants';

export function* loadMovieDetailsSagas() {
    yield takeEvery(LOAD_MOVIE_DETAILS, loadMovieDetailsAsync);
}

export function* loadMovieDetailsAsync(action) {
    const response = yield call(axios.get, `${BASE_URL}movie/${action.payload.id}?api_key=${action.payload.apiKey}`);
    if (response.status === 200) {
        yield put(saveMovieDetails(response.data));
    }
}
