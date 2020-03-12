import {SET_AUTH, SET_CURRENT_LEAGUE, SET_GROUPS_COUNT, SET_TOURNAMENT_TYPE} from './action-types'
import {TournamentVariants} from "../IStore";

//set auth action creator
export const setAuth = (login: string, myId: number) => {
    return {type: SET_AUTH, login, myId, isAuth: true}
}

export const setGroupsCount = (groupsCount: number) => {
    return {type: SET_GROUPS_COUNT, groupsCount}
}

export const setVariantOfTournament = (variantOfTournament: TournamentVariants) => {
    return {type: SET_TOURNAMENT_TYPE, variantOfTournament}
}

export const setCurrentLeague = (id: number) => {
   return {type: SET_CURRENT_LEAGUE, id}
}




