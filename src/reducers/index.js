import { combineReducers } from 'redux';
import images from './imageSearch';
import query from './searchQuery';

const rootReducer = combineReducers({
  images, query
});

export default rootReducer;