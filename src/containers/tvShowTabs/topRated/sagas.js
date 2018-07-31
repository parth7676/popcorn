import { take, cancel, takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { LOAD_TOPRATED_TVSHOWS } from './constants';
import { saveTopRatedTVShows } from './actions';
import { BASE_URL } from '../../../constants';

export function* loadTopRatedTVShowsSagas() {
    yield takeEvery(LOAD_TOPRATED_TVSHOWS, loadTopRatedAsync);
}

export function* loadTopRatedAsync(action) {
    const response = yield call(axios.get, `${BASE_URL}tv/top_rated?api_key=${action.payload.apiKey}&page=${action.payload.pageIndex}`);
    if (response.status === 200) {
        yield put(saveTopRatedTVShows(response.data));
    }
}
