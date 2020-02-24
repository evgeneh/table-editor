import {ICreateTournamentState} from "../IStore"


let initialState : ICreateTournamentState = {
    name : "",
    groups: [],
    teamsCount: 0,
    groupsCount: 0,
    playOffCount: 0,
    homeAway: false
}

export const createTournamentReducer = (state: ICreateTournamentState, type: any):ICreateTournamentState => {
    return state
}