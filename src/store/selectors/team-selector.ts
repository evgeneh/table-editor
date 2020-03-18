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

const getTournamentGroups = (state: RootStateType) => {
    return state.createTournament.tournament.groups
}

export const getTeamsNoDuplicate  = createSelector(getTeams, getTournamentGroups, (teams, groups) => {
    if (!teams) return null
    return teams.filter( (team) => {
          let res = true;
          groups.forEach( (group) => {
            if (!! group.teams.find(x => x?.id === team.id)  )
                res = false
          })
        return res
    })
})