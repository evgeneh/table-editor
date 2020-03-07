import {IAuth} from "../../IStore"
import {AuthActionType, SET_AUTH} from "./action-types";

let initialState :IAuth = {
    myId: null,
    login: '',
    isAuth: true
}

export const authReducer = (state = initialState, action: AuthActionType ): IAuth => {
    switch (action.type) {

        case SET_AUTH:
            return {...state, myId:action. myId, login: action.login, isAuth: action.isAuth}
    }

    return state
}

export const setAuth = (login: string, myId: number) => {
    return {type: SET_AUTH, login, myId, isAuth: true}
}

