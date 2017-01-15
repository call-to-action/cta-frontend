import { combineReducers } from 'redux';
import user from './user-reducer';
import cards from './cards-reducer';

export default combineReducers({
    cards,
    user,
});
