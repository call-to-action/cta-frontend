import { combineReducers } from 'redux'

import telephoneApi from '../api/telephone'

import {
    INIT_TELEPHONY_START,
    DEVICE_READY,
    DEVICE_CREATION_FAILURE,
    CALL_START,
    ACCEPT_CALL,
    IGNORE_CALL,
    REJECT_CALL,
    END_CALL,
    CONNECTION_START,
    CONNECTION_SUCCESS,
    CONNECTION_FAILURE,
    CONNECTION_STOP,
    DEVICE_LISTENING_START,
    DEVICE_LISTENING_STOP,
    DEVICE_RECEIVED_INCOMING,
} from '../actions/action-types';


const telephonyInitialState = {
    deviceReady: false,
    deviceError: null,
    clientName:  'jenny',
    callDirection:  null,
    callingError:   null,
    callFromNumber: null,
    callToNumber:   null,
    listening:      false,
}

export default (state = telephonyInitialState, action = {}) => {
    switch (action.type) {
        case INIT_TELEPHONY_START:
            telephoneApi.init(action.client);
            return Object.assign({}, state, {
                deviceError: null,
            });

        case DEVICE_READY:
            telephoneApi.initListeners();
            return Object.assign({}, state, {
                deviceReady: true,
                deviceError: null,
            });

        case DEVICE_CREATION_FAILURE:
            return Object.assign({}, state, {
                deviceReady: false,
                deviceError: action.err,
            });

        case CONNECTION_START:
            console.log('### CONNECTION_START', action);
            return Object.assign({}, state, {
                callFromNumber: action.From,
                callToNumber: action.To,
            });

        case CONNECTION_SUCCESS:
            console.log('### CONNECTION_SUCCESS', action.params);
            return state;

        case CONNECTION_FAILURE:
            return Object.assign({}, state, {
                callDirection: null,
                callFromNumber: null,
                callToNumber: null,
                callingError: action.err,
            });

        case CONNECTION_STOP:
            console.log('### CONNECTION_STOP', action.params);
            return Object.assign({}, state, {
                callFromNumber: null,
                callToNumber: null,
                callingError: action.err,
            });

        case CALL_START:
            telephoneApi.makeCall(action.number);
            return Object.assign({}, state, {
                callDirection: 'out',
                callFromNumber: null,
                callToNumber: action.number,
                callingError: null,
            });

        case DEVICE_LISTENING_START:
            return Object.assign({}, state, {
                listening: true,
            });

        case DEVICE_RECEIVED_INCOMING:
            return Object.assign({}, state, {
                callDirection: 'in',
                callFromNumber: action.From,
                callToNumber: null,
                callingError: null,
            });

        case DEVICE_LISTENING_STOP:
            return Object.assign({}, state, {
                listening: false,
            });

        case ACCEPT_CALL:
            telephoneApi.acceptCall();
            return Object.assign({}, state, {
                callingError: null,
            });

        case REJECT_CALL:
            telephoneApi.rejectCall();
            return Object.assign({}, state, {
                callDirection: null,
                callFromNumber: null,
                callToNumber: null,
                callingError: null,
            });

        case IGNORE_CALL:
            telephoneApi.ignoreCall();
            return Object.assign({}, state, {
                callDirection: null,
                callFromNumber: null,
                callToNumber: null,
                callingError: null,
            });

        case END_CALL:
            telephoneApi.endCall();
            return Object.assign({}, state, {
                callDirection: null,
                callFromNumber: null,
                callToNumber: null,
                callingError: null,
            });

        default:
            return state;
    }
}