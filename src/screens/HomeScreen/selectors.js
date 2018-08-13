import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
});
import { createSelector } from 'reselect';

/**
 * The global state selectors
 */

const selectGlobal = () => (state) => {
    return state.homeScreen
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