import { combineReducers } from 'redux';
import { seasonAverageReducer, boxScoreReducer, playerProfileReducer, errorReducer, allPlayersReducer} from './player_reducer'

let reducers = combineReducers({
  errorState: errorReducer,
  allPlayers: allPlayersReducer,
  seasonAvgState: seasonAverageReducer,
  boxScoreState: boxScoreReducer,
  playerProfileState: playerProfileReducer,
});

export default reducers;
