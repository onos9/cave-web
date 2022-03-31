import {
    REGISTER_LOADING,
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
} from "../../Constants/actionTypes"

const auth = (state, { payload, type }) => {
    switch (type)
    {

        case "LOADING":
            return {
                ...state,
                error: false,
                loading: true,
            }

   
        case "SUCCESS":
            return {
                ...state,
                loading: false,
                data: payload,
            }


        case "ERROR":
            return {
                ...state,
                loading: false,
                error: payload,
            }
        default:
            return state
    }
}

export default auth