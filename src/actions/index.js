import * as types from './action-types';

export function login(navProps, res) {
  console.log(res);
  return {
    type: types.LOGIN,
    nav:navProps,
    data: res
  };
}


//TELEPHONE ACTIONS
export function connectionDidStartConnecting(params) {
    let To = ''
    if (params && params.To) {
        To = params.To
    }
    return {
        type: types.CONNECTION_START,
        To:   To,
    }
}

export function connectionDidConnect(params) {
    return {
        type: types.CONNECTION_SUCCESS,
        params: params,
    }
}

export function connectionDidFail(params) {
    return {
        type: types.CONNECTION_FAILURE,
        err:  params.err,
    }
}

export function connectionDidDisconnect(params) {
    return {
        type: types.CONNECTION_STOP,
        params: params,
    }   
}

export function deviceDidStartListening(params) {
    return {
        type: types.DEVICE_LISTENING_START,
        params: params,
    }
}

export function deviceDidStopListening(params) {
    return {
        type: types.DEVICE_LISTENING_STOP,
        params: params,
    }
}

export function deviceDidReceiveIncoming(params) {
    return {
        type: types.DEVICE_RECEIVED_INCOMING,
        From: params.From,
    }
}

export function makeCallStart(number) {
    return {
        type: types.CALL_START,
        number: number,
    }
}

export function acceptCall() {
    return {
        type: types.ACCEPT_CALL,
    }
}

export function rejectCall() {
    return {
        type: types.REJECT_CALL,
    }
}

export function ignoreCall() {
    return {
        type: types.IGNORE_CALL,
    }
}

export function endCall() {
    return {
        type: types.END_CALL,
    }
}

export function initTelephonyStart(client) {
    return {
        type: types.INIT_TELEPHONY_START,
        client: client,
    }
}

export function deviceReady() {
    return {
        type: types.DEVICE_READY,
    }
}

export function telephonyInitFailure(err) {
    return {
        type: types.DEVICE_CREATION_FAILURE,
        err:  err,
    }
}