import {
    SET_AUTH,
    SET_CURRENT_LEAGUE,
    SET_GROUPS_COUNT,
    SET_TOURNAMENT_TYPE,
    SET_INITIALIZE_SUCCESS,
    SET_TEAMS_LIST, SET_CURRENT_TEAM, ADD_TEAM_TO_GROUP
} from './action-types'

import {ITeamSelect, TournamentVariants} from "../IStore";

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

export const addTeamToGroup = (team: ITeamSelect,  groupId: number, teamPos: number) => {
    return {type: ADD_TEAM_TO_GROUP, team, groupId, teamPos}
}

//-------team and league selection
export const setCurrentLeague = (id: number) => {
   return {type: SET_CURRENT_LEAGUE, id}
}

export const setCurrentTeam = (id: number | null) => {
    return {type: SET_CURRENT_TEAM, id}
}

export const SetTeamsList = (teams: Array<ITeamSelect>) => {
    return {type: SET_TEAMS_LIST, teams}
}



