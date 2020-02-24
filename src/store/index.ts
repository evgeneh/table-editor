import * as Redux from 'redux';
//import thunk from 'redux-thunk';
import { createTournamentReducer} from './reducers/create-tournament-reducer'

const rootReducer = Redux.combineReducers({
    createTournament: createTournamentReducer
});

export default Redux.createStore(rootReducer)