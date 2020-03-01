import {TournamentVariants} from '../IStore'

export const ADD_TOURNAMENT_NAME = 'ADD_TOURNAMENT_NAME'
export const SET_TOURNAMENT_TYPE = 'SET_TOURNAMENT_TYPE'
export const SET_GROUPS_COUNT = 'SET_GROUPS_COUNT'



interface AddTournamentNameAction {
    type: typeof ADD_TOURNAMENT_NAME
    tournamentName: string
}

interface SetGroupsCountAction {
    type: typeof SET_GROUPS_COUNT
    groupsCount: number
}

interface setVariantOfTournament {
    type: typeof SET_TOURNAMENT_TYPE
    variantOfTournament: TournamentVariants
}

export type CreateTournamentActionType = AddTournamentNameAction | SetGroupsCountAction | setVariantOfTournament