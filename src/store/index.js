import initialState from './initialState';
import {createStore} from 'redux';

import {CLOSE_LIST} from './components/CLOSE_LIST';
import {REMOVE_BETS} from './components/REMOVE_BETS';
import {GET_NUMBER_BETS} from './components/GET_NUMBER_BETS';
import {GET_OUTSIDE_BETS} from './components/GET_OUTSIDE_BETS';
import {GAME_RESULT} from './components/GAME_RESULT';
import {SPIN_BALL} from './components/SPIN_BALL';
import {NO_MORE_BETS} from './components/NO_MORE_BETS';
import {RESET_CHIPS} from './components/RESET_CHIPS';
import {PREV_BET} from './components/PREV_BET';

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GAME_RESULT':
            return GAME_RESULT(state)
        case 'SPIN_BALL':
            return SPIN_BALL(state)
        case 'NO_MORE_BETS':
            return NO_MORE_BETS(state)
        case 'GET_OUTSIDE_BETS':
            return GET_OUTSIDE_BETS(state, action)
        case 'GET_NUMBER_BETS':
            return GET_NUMBER_BETS(state, action)
        case 'REMOVE_BETS':
           return REMOVE_BETS(state)
        case 'CLOSE_LIST':
            return CLOSE_LIST(state)
        case 'RESET_CHIPS':
            return RESET_CHIPS(state)
        case 'PREV_BET':
            return PREV_BET(state)
        default:
            return state;
    }
}

const store = createStore(reducer);
export default store;