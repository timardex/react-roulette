import React from 'react';
import {connect} from 'react-redux';

import CountdownTimer from './countdown-timer';

const Buttons = props => {
    return(
        <div className="text-center max-width btn-box">
            {(props.number_checked.length > 0 || props.outside_bets_names.length > 0) &&  <button onClick={(e) => props.removeBets()} className={`btn btn-primary ${props.disabled_btn}`}>{props.remove_bet_text}</button>}
            <button 
                onClick={(e) => {props.spinBall(); props.ball_effect.play();}} 
                className={`btn btn-primary ${props.disabled_spin}`}>
                {props.button_text} {props.show_timer ? <CountdownTimer /> : ''}
            </button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        remove_bet_btn: state.remove_bet_btn,
        remove_bet_text: state.remove_bet_text,
        spin_btn: state.spin_btn,
        disabled_spin: state.disabled_spin,
        disabled_btn: state.disabled_btn,
        button_text: state.button_text,
        number_checked: state.number_checked,
        outside_bets_names: state.outside_bets_names,
        ball_effect: state.ball_effect,
        show_timer: state.show_timer,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeBets:() => {
            const action = {type: 'REMOVE_BETS'};
            dispatch(action);
        },
        spinBall:() => {
            const action = {type: 'SPIN_BALL'};
            dispatch(action);
            
            setTimeout(() => {
                const action = {type: 'NO_MORE_BETS'};
                dispatch(action)
            }, 100)

            setTimeout(() => {
                const action = {type: 'GAME_RESULT'};
                dispatch(action)
            }, 195)
        },
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);