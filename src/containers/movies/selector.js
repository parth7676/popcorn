import { createSelector } from 'reselect';

/**
 * Direct selector to the students state domain
 */
const selectStudentsPageDomain = () => (state) => { console.log(state); return state.get('moviesPage') };

/**
 * Other specific selectors
 */


/**
 * Default selector used by StudentsPage
 */

const makeSelectStudentsPage = () => createSelector(
    selectStudentsPageDomain(),
);

export default makeSelectStudentsPage;
export {
    selectStudentsPageDomain,
};
