import { AUTH } from '../constants/actionTypes'
import * as api from '../Api'

export const signin = (forData, history) => async (dispatch) => {
    try {
        // log in user
        history.push('/')
    } catch (error) {
        console.log(error);
    }
}

export const signup = (forData, history) => async (dispatch) => {
    try {
        // sign up user
        history.push('/')
    } catch (error) {
        console.log(error);
    }
}