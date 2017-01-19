import qs from 'qs'

import Twilio from 'react-native-twilio'

import endpoints from './endpoints'

import store from '../store'

import {
    deviceDidStartListening,
    deviceDidStopListening,
    deviceDidReceiveIncoming,
    deviceReady,
    deviceCreationFail,
    connectionDidStartConnecting,
    connectionDidConnect,
    connectionDidDisconnect,
    connectionDidFail,
} from '../../actions'

function _deviceDidStartListening(params) {
    store.dispatch(deviceDidStartListening(params))
}

function _deviceDidStopListening(params) {
    store.dispatch(deviceDidStopListening(params))
}

function _deviceDidReceiveIncoming(params) {
    store.dispatch(deviceDidReceiveIncoming(params))
}

function _connectionDidStartConnecting(params) {
    store.dispatch(connectionDidStartConnecting(params))
}

function _connectionDidConnect(params) {
    store.dispatch(connectionDidConnect(params))
}

function _connectionDidDisconnect(params) {
    store.dispatch(connectionDidDisconnect(params))
}

function _connectionDidFail(params) {
    store.dispatch(connectionDidFail(params))
}

function _deviceReady(params) {
    store.dispatch(deviceReady(params))
}

function _deviceUpdated(params) {
    console.log('deviceUpdated params', params)
}

function _deviceCreationFail(params) {
    store.dispatch(deviceCreationFail(params))
}

let telephonyService = {
    init(client) {
        this.initDeviceListeners();
        return Twilio.initWithToken('59d98177be998b46d59c8dc3ed432747')
    },
    makeCall(number) {
        console.log('telephonyService::makeCall()', number)
        Twilio.connect({
            To: number
        })
        return
    },
    acceptCall() {
        console.log('telephonyService::acceptCall()')
        Twilio.accept()
        return
    },
    rejectCall() {
        console.log('telephonyService::rejectCall()')
        Twilio.reject()
        return
    },
    ignoreCall() {
        console.log('telephonyService::ignoreCall()')
        Twilio.ignore()
        return
    },
    endCall() {
        console.log('telephonyService::endCall()')
        Twilio.disconnect()
        return
    },
    initDeviceListeners() {
        Twilio.addEventListener('deviceReady', _deviceReady)
        Twilio.addEventListener('deviceCreationFail', _deviceCreationFail)
        Twilio.addEventListener('deviceUpdated', _deviceUpdated)
    },
    initListeners() {
        Twilio.addEventListener('deviceDidStartListening', _deviceDidStartListening)
        Twilio.addEventListener('deviceDidStopListening', _deviceDidStopListening)
        Twilio.addEventListener('deviceDidReceiveIncoming', _deviceDidReceiveIncoming)

        Twilio.addEventListener('connectionDidStartConnecting', _connectionDidStartConnecting)
        Twilio.addEventListener('connectionDidConnect', _connectionDidConnect)
        Twilio.addEventListener('connectionDidDisconnect', _connectionDidDisconnect)
        Twilio.addEventListener('connectionDidFail', _connectionDidFail)

    }
}

export default telephonyService