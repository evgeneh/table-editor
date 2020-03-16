import {RootStateType} from "../index";
import {createSelector} from "reselect";

const getLeagues = (state: RootStateType) => {
    return state.teamSelect.leagues
}

const getCurrentLigId= (state: RootStateType) => {
    return state.teamSelect.currentLeagueId
}

export const getCurrentLeague = createSelector(getLeagues, getCurrentLigId, (leagues, currentId) => {
    return leagues.find( (lig) => (lig.id === currentId))
})

const getTeams = (state: RootStateType) => {
    return state.teamSelect.teams
}

const getCurrentTeamId= (state: RootStateType) => {
    return state.teamSelect.currentTeamId
}

export const getCurrentTeam = createSelector(getTeams, getCurrentTeamId, (teams, currentId) => {
    if (! teams) return null
    return teams.find( (team) => (team.id === currentId))
})