import {IAuth} from "../../IStore"
import {AuthActionType, SET_AUTH} from "../action-types";

let initialState :IAuth = {
    myId: null,
    login: '',
    isAuth: false
}

export const authReducer = (state = initialState, action: AuthActionType ): IAuth => {
    switch (action.type) {

        case SET_AUTH:
            return {...state, myId:action. myId, login: action.login, isAuth: action.isAuth}
    }

    return state
}


