import config from '../utils/config'
import * as types from '../utils/constants'
import axios from 'axios'
import * as dummyData from './dummydata/data'


export const loginAction = (payload) => {
    var url = config.login
    return (dispatch) => {
        dispatch({
            type: types.LOGIN_FETCH,
        })
        axios.post(url, payload)
            .then(function (response) {
                dispatch({
                    type: types.LOGIN_SUCCESS,
                    response
                })
            })
            .catch(function (error) {
                dispatch({
                    type: types.LOGIN_ERROR,
                    error
                })
            });
    };

}
var signupData = dummyData.signupData
export const signupAction = (payload) => {
    var url = config.login
    return (dispatch) => {
        dispatch({
            type: types.SIGNUP_FETCH,
        })
        axios.post(url, payload)
            .then(function (response) {
                response = signupData
                dispatch({
                    type: types.SIGNUP_SUCCESS,
                    response
                })
            })
            .catch(function (error) {
                dispatch({
                    type: types.SIGNUP_ERROR,
                    error
                })
            });
    }
}