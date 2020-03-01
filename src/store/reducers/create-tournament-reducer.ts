import {ICreateTournamentState, TournamentVariants} from "../IStore"
import {ADD_TOURNAMENT_NAME, CreateTournamentActionType, SET_GROUPS_COUNT, SET_TOURNAMENT_TYPE} from "./action-types";


let initialState : ICreateTournamentState = {
    variantOfTournament: TournamentVariants.PO_GR,
    name : "",
    groups: [],
    teamsCount: 0,
    groupsCount: 0,
    playOffCount: 0,
    homeAway: false
}

export const createTournamentReducer = (state: ICreateTournamentState, action: CreateTournamentActionType): ICreateTournamentState => {
    switch (action.type) {
        case ADD_TOURNAMENT_NAME:
            return {...state, name: action.tournamentName}
        case SET_GROUPS_COUNT:
            return {...state, groupsCount: action.groupsCount}
        case SET_TOURNAMENT_TYPE:
            let groupCount = state.groupsCount
            if (action.variantOfTournament === TournamentVariants.PO)
                groupCount = 0
            else if (action.variantOfTournament === TournamentVariants.LIG)
                groupCount = 1
            return {...state}
    }

    return state
}