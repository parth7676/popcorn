import { take, cancel, takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { LOAD_ONTHEAIR_TVSHOWS } from './constants';
import { saveOnTheAirTVShows } from './actions';
import { BASE_URL } from '../../../constants';

export function* loadOnTheAirTVShowsSagas() {
    yield takeEvery(LOAD_ONTHEAIR_TVSHOWS, loadOnTheAirTVShowsAsync);
}

function* loadOnTheAirTVShowsAsync(action) {
    const response = yield call(axios.get, `${BASE_URL}tv/on_the_air?api_key=${action.payload.apiKey}&page=${action.payload.pageIndex}`);
    if (response.status === 200) {
        yield put(saveOnTheAirTVShows(response.data));
    }
}
