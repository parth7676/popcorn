import { createSelector } from 'reselect';

/**
 * Direct selector to the CompanyPage state domain
 */
const selectLoginPageDomain = () => (state) => state.get('loginPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by CompanyPage
 */

const makeSelectLoginPage = () => createSelector(
    selectLoginPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectLoginPage;
export {
    selectLoginPageDomain,
};
