import {ILeagueSelect, ITeamSelectState} from "../../IStore"
import {
    SET_CURRENT_LEAGUE,
    SET_TEAMS_LIST,
    SET_CURRENT_TEAM,
    TeamSelectActionType
} from "../action-types";

let leagues: Array<ILeagueSelect> = [{name: "APL", id: 2, country: 'England'}, {name: "La Liga", country: 'Spain', id: 3}, {name: "Bundesliga", id: 4}, {name: "Serie A", id: 5}, {name: "Ligue 1", id: 6}, {name: "International", id: 1}]

let initialState :ITeamSelectState = {
    topSix: [...leagues],
    teams: null,
    currentLeagueId: null,
    currentTeamId: null,
    leagues: [...leagues]
}

export const teamSelectReducer = (state = initialState, action: TeamSelectActionType ): ITeamSelectState => {
    switch (action.type) {

        case SET_CURRENT_LEAGUE:
            return {...state, currentLeagueId: action.id}
        case SET_CURRENT_TEAM:
            return {...state, currentTeamId: action.id}
        case SET_TEAMS_LIST:
            console.log(action.teams)
            return {...state, teams: action.teams}
    }

    return state
}


