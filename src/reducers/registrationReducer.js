import * as types from '../utils/constants'
const INITIAL_STATE = { data: {}, error: null, status: null, loading: false }
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.SIGNUP_FETCH:
            return {
                data: {},
                error: null,
                status: null,
                loading: true
            }
        case types.SIGNUP_SUCCESS:
            return {
                data: action.response.data,
                error: null,
                status: action.response.status,
                loading: false
            }
        case types.SIGNUP_ERROR:
            return {
                data: {},
                error: action.error,
                status: null,
                loading: false
            }
        default:
            return state;
    }

}
