import {
    SET_AUTH,
    SET_CURRENT_LEAGUE,
    SET_GROUPS_COUNT,
    SET_TOURNAMENT_TYPE,
    SET_INITIALIZE_SUCCESS
} from './action-types'

import {TournamentVariants} from "../IStore";

//-----set auth action creators----
export const setAuth = (login: string, myId: number) => {
    return {type: SET_AUTH, login, myId, isAuth: true}
}

export const setInitialize = (login: string, isAuth: boolean) => {
    return {type: SET_INITIALIZE_SUCCESS, login, isAuth}
}
//-------------------------------

export const setGroupsCount = (groupsCount: number) => {
    return {type: SET_GROUPS_COUNT, groupsCount}
}

export const setVariantOfTournament = (variantOfTournament: TournamentVariants) => {
    return {type: SET_TOURNAMENT_TYPE, variantOfTournament}
}

export const setCurrentLeague = (id: number) => {
   return {type: SET_CURRENT_LEAGUE, id}
}




