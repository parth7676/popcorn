import { take, cancel, takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_STUDENTS } from './constants';
import { saveStudents } from './actions';
const STUDENTS_URL = '/students';
const BASE_URL = 'http://localhost:8000/api';

export function* loadStudentsSagas() {
    console.log('I am also called on button.');
    yield takeEvery(LOAD_STUDENTS, loadStudentsAsync);
}

export function* loadStudentsAsync(action) {
    const data = `grant_type=password&username=admin&password=Admin@123&scope=offline_access BigBuyApi&client_id=BigBuyClient`;
    const response = yield call(axios.get, 'https://swapi.co/api/planets/3/');
    console.log(response);
    if (response.status === 200) {
        // yield put(saveStudents(response.data.data));
        console.log("I am success")
    }
}

