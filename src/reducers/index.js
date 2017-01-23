import { combineReducers } from 'redux';
import cards from './cards-reducer';
import telephone from './telephone-reducer';
import user from './user-reducer';

export default combineReducers({
    cards,
    telephone,
    user,
});
