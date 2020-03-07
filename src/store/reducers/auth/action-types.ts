import {TournamentVariants} from '../../IStore'

export const SET_AUTH = 'SET_AUTH'

interface SetAuthAction {
    type: typeof SET_AUTH
    myId: number
    login: string
    isAuth: boolean
}

export type AuthActionType = SetAuthAction