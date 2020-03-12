import * as Redux from 'redux';
import { createTournamentReducer} from './reducers/create-tournament/create-tournament-reducer'
import {authReducer} from "./reducers/auth/auth-reducer";
import {teamSelectReducer} from "./reducers/create-tournament/team-select-reducer";

const rootReducer = Redux.combineReducers({
    createTournament: createTournamentReducer,
    auth: authReducer,
    teamSelect: teamSelectReducer
})

type rootReducerType = typeof rootReducer

export type RootStateType = ReturnType<typeof rootReducer>

export default Redux.createStore(rootReducer)