import {ICreateTournamentState, IGroup, ITeam, TournamentVariants} from "../../IStore"
import {ADD_TOURNAMENT_NAME, CreateTournamentActionType, SET_GROUPS_COUNT, SET_TOURNAMENT_TYPE} from "./action-types";

let initialGroup: IGroup =  {
    groupId: 0,
    teamsCount: 4,
    teamsGoToPlayOff: 2,
    teams: [null, null, null, null]
}

let initialState : ICreateTournamentState = {
    variantOfTournament: TournamentVariants.PO_GR,
    tournament: {
        name: "",
        groups: [
            {
                groupId: 0,
                teamsCount: 4,
                 teamsGoToPlayOff: 2,
                 teams: [null, null, null, null]
            },
            {
                groupId: 1,
                teamsCount: 4,
                teamsGoToPlayOff: 2,
                teams: [null, null, null, null]
            }
        ],
        teamsCount: 0,
        groupsCount: 2,
        playOffCount: 0,
        homeAway: false
    }
}

export const createTournamentReducer = (state = initialState, action: CreateTournamentActionType): ICreateTournamentState => {
    switch (action.type) {
        case ADD_TOURNAMENT_NAME:
            return {...state, tournament: { ...state.tournament, name: action.tournamentName} }
        case SET_GROUPS_COUNT:
            let groups = state.tournament.groups ;
            if (action.groupsCount > state.tournament.groupsCount)
            {
                groups.push(initialGroup)
                groups[groups.length-1].groupId = groups.length
            }
            return {...state, tournament: { ...state.tournament, groupsCount: action.groupsCount, groups: groups} }
        case SET_TOURNAMENT_TYPE:
            let groupCount = state.tournament.groupsCount
            if (action.variantOfTournament === TournamentVariants.PO)
                groupCount = 0
            else if (action.variantOfTournament === TournamentVariants.LIG)
                groupCount = 1
            else if (action.variantOfTournament === TournamentVariants.PO_GR)
                groupCount = 2
            return {...state, variantOfTournament: action.variantOfTournament, tournament: {...state.tournament, groupsCount: groupCount}}
    }

    return state
}

export const setVariantOfTournament = (variantOfTournament: TournamentVariants) => {
    return {type: SET_TOURNAMENT_TYPE, variantOfTournament}
}

export const setGroupsCount = (groupsCount: number) => {
    return {type: SET_GROUPS_COUNT, groupsCount}
}

