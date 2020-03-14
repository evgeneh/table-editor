import {TournamentVariants} from '../IStore'

export const SET_AUTH = 'SET_AUTH'
export const SET_INITIALIZE_SUCCESS = 'SET_INITIALIZE_SUCCESS'

export const ADD_TOURNAMENT_NAME = 'ADD_TOURNAMENT_NAME'
export const SET_TOURNAMENT_TYPE = 'SET_TOURNAMENT_TYPE'
export const SET_GROUPS_COUNT = 'SET_GROUPS_COUNT'

export const SET_CURRENT_LEAGUE = 'SET_CURRENT_LEAGUE'

//tournament creator action type
interface AddTournamentNameAction {
    type: typeof ADD_TOURNAMENT_NAME
    tournamentName: string
}

interface SetGroupsCountAction {
    type: typeof SET_GROUPS_COUNT
    groupsCount: number
}

export interface setVariantOfTournamentAction {
    type: typeof SET_TOURNAMENT_TYPE
    variantOfTournament: TournamentVariants
}

export type CreateTournamentActionType = AddTournamentNameAction | SetGroupsCountAction | setVariantOfTournamentAction

//select league and team action type
export interface setCurrentLeague {
    type: typeof SET_CURRENT_LEAGUE
    id: number
}

export type TeamSelectActionType = setCurrentLeague

//auth action type
interface SetAuthAction {
    type: typeof SET_AUTH
    myId: number
    login: string
    isAuth: boolean
}

interface SetInitializeSuccess {
    type: typeof SET_INITIALIZE_SUCCESS
    isAuth: boolean
    login: string
}

export type AuthActionType = SetAuthAction | SetInitializeSuccess


