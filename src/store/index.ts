import * as Redux from 'redux';
import { createTournamentReducer} from './reducers/create-tournament/create-tournament-reducer'
import {authReducer} from "./reducers/auth/auth-reducer";

const rootReducer = Redux.combineReducers({
    createTournament: createTournamentReducer,
    auth: authReducer
})

type rootReducerType = typeof rootReducer

export type RootStateType = ReturnType<typeof rootReducer>

export default Redux.createStore(rootReducer)