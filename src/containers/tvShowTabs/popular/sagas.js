import { take, cancel, takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { LOAD_POPULAR_TVSHOWS } from './constants';
import { savePopularTVShows } from './actions';
import { BASE_URL } from '../../../constants';

export function* loadPopularTVShowsSagas() {
    yield takeEvery(LOAD_POPULAR_TVSHOWS, loadPopularAsync);
}

export function* loadPopularAsync(action) {
    const response = yield call(axios.get, `${BASE_URL}tv/popular?api_key=${action.payload.apiKey}&page=${action.payload.pageIndex}`);
    if (response.status === 200) {
        yield put(savePopularTVShows(response.data));
    }
}
