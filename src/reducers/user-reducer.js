import * as types from '../actions/action-types';
import _ from 'underscore';

const initialState = {
    email: '',
    firstName: '',
    lastName: '',
    subscribers: [],
    subscriptions: [],
}

export function user (state = initialState, action = {}) {
    const payload = action.payload;

    switch(action.type) {
        case types.SET_USER:
            return Object.assign({}, state, { payload.value });
        case types.FOLLOW_USER:
            const currSubscriptions = _.clone(state.subscriptions);
            currSubscriptions.push(payload.value);

            return Object.assign({}, state, { subscriptions: currSubscriptions });
        default:
            return state;
    }
}
