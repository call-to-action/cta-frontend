import * as types from '../actions/action-types';
import { WOMENS_RIGHTS, REPRO_ISSUES } from '../constants/categories';
import { CARD_COMPLETED } from '../constants/cards';

const initialState = {
    createdCards: [],
    // store 20 clientside?
    upcomingCards: [
        {
            title: 'A new bill that would ban abortions.',
            description: 'Banning abortions would lead to dangerous practices for people in need',
            actionItem: 'Call your representatives to tell them you do not support this bill',
            categories: [WOMENS_RIGHTS, REPRO_ISSUES],
            creatorId: 'id_1234',
        }
    ],
}

export function cards (state = initialState, action = {}) {
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
