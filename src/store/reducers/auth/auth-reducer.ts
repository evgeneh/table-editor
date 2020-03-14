import {IAuth} from "../../IStore"
import {AuthActionType, SET_AUTH, SET_INITIALIZE_SUCCESS} from "../action-types";

let initialState :IAuth = {
    myId: null,
    login: '',
    isAuth: false,
    isInitialize: false
}

export const authReducer = (state = initialState, action: AuthActionType ): IAuth => {
    switch (action.type) {

        case SET_AUTH:
            return {...state, myId: action.myId, login: action.login, isAuth: action.isAuth}
        case SET_INITIALIZE_SUCCESS:
            return {...state, isInitialize: true, isAuth: action.isAuth, login: action.login}
    }

    return state
}


