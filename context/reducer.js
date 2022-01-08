import { SET_LOADING, LOGIN_USER_SUCCESS, SET_USER, LOGOUT } from "./actions";

const reducer = (state, action)=>{
    switch (action.type) {
        case SET_LOADING:
            return {...state, isLoading: action.payload}
        case SET_USER:
            return {...state, isLoading: false, user: action.payload}
        case LOGIN_USER_SUCCESS:
            return {...state, isLoading: false, user: action.payload}
        case LOGOUT:
            return {...state, isLoading: false, user: null}
    }
}

export default reducer