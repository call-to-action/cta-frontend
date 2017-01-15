import * as types from '../actions/action-types';
import { CARD_COMPLETED } from '../constants/cards';

const initialState = {
    createdCards: [],
    // store 20 clientside?
    upcomingCards: [],
}

export default (state = initialState, action = {}) => {
    const payload = action.payload;
    switch(action.type) {
        case types.CREATE_CARD:
            const currentCards = _.clone(state.createdCards);
            currentCards.push(payload.value);

            return Object.assign({}, state, { createdCards: currentCards });
        default:
            return state;
    }
}
