import { LOAD_STUDENTS, SAVE_STUDENTS } from './constants';

export function loadStudents() {
    console.log('I am called on button press.')
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