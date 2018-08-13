import { createSelector } from 'reselect';

/**
 * The global state selectors
 */

const selectGlobal = () => (state) => {
    return state.login
};
const makeSelectGlobal = () => createSelector(
    selectGlobal(),
    (substate) => {
        return substate
    }
);

export {
    selectGlobal,
    makeSelectGlobal
};