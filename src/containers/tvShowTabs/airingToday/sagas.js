import { take, cancel, takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { LOAD_AIRING_TODAY_TVSHOWS } from './constants';
import { saveAiringTodayTVShows } from './actions';
import { BASE_URL } from '../../../constants';

export function* loadAiringTodayTVShowsSagas() {
    yield takeEvery(LOAD_AIRING_TODAY_TVSHOWS, loadAiringTodayTVShowsAsync);
}

function* loadAiringTodayTVShowsAsync(action) {
    const response = yield call(axios.get, `${BASE_URL}tv/airing_today?api_key=${action.payload.apiKey}&page=${action.payload.pageIndex}`);
    if (response.status === 200) {
        yield put(saveAiringTodayTVShows(response.data));
    }
}
