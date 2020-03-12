import {ITeamSelect, ILeagueSelect, ITeamSelectState} from "../../IStore"
import {TeamSelectActionType, SET_CURRENT_LEAGUE} from "../action-types";

let leagues: Array<ILeagueSelect> = [{name: "APL", id: 2, country: 'England'}, {name: "La Liga", country: 'Spain', id: 3}, {name: "Bundesliga", id: 3}, {name: "Serie A", id: 4}, {name: "Ligue 1", id: 5}, {name: "International", id: 1}]

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
    }

    return state
}


