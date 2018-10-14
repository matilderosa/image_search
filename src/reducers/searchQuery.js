import { CLEAR_SEARCH, SAVE_QUERY } from '../actions/actionTypes';

const initialState = '';

export default function(state = initialState, action) {
  switch(action.type) {
    case SAVE_QUERY:
      return action.payload;
    case CLEAR_SEARCH:
      return initialState;
    default:
      return state;
  }
}