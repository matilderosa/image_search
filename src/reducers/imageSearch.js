import {CLEAR_SEARCH, SEARCH_IMAGES} from '../actions/actionTypes';

const initialState = [];

export default function(state = initialState, action) {
  switch(action.type) {
    case SEARCH_IMAGES:
      return [...state, ...action.payload.data.hits];
    case CLEAR_SEARCH:
      return initialState;
    default:
      return state;
  }
}