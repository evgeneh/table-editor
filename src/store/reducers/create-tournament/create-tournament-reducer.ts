import {ICreateTournamentState, IGroup, ITeamSelect, TournamentVariants} from "../../IStore"
import {
    CreateTournamentActionType,
    ADD_TOURNAMENT_NAME,
    SET_GROUPS_COUNT,
    SET_TOURNAMENT_TYPE, ADD_TEAM_TO_GROUP
} from "../action-types";

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
        case ADD_TEAM_TO_GROUP:

            let id = action.groupId
            let t = {...state.tournament.groups[id], teams: [...state.tournament.groups[id].teams]}
            t.teams[action.teamPos] = action.team
            console.log(t)
            let newState = {...state, tournament: { ...state.tournament, groups: Object.assign([...state.tournament.groups], {[id]: {
                            ...state.tournament.groups[id], teams: Object.assign([...state.tournament.groups[id].teams],{ [action.teamPos]: action.team})
            }}) }}

            return newState
    }

    return state
}
