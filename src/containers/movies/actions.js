import { LOAD_STUDENTS, SAVE_STUDENTS } from './constants';

export function loadStudents() {
    return {
        type: LOAD_STUDENTS,
    };
}

export function saveStudents(students) {
    return {
        type: SAVE_STUDENTS,
        payload: {
            data: students,
        }
    }
}