import React from 'react';
import {connect} from 'react-redux';

const CurrentChip = props => {
  return(
    <div className="current-chip-container">
      <div className="chip-amount">
        {props.output_number !== null && props.current_chip > 0 && props.show_prev_bet_btn && <button className="btn btn-primary" onClick={(e) => props.prevBet()}>Previous bet</button>}
        {props.current_chip > 0 && <p className="current-chip">You have <span>{props.current_chip}€</span></p>}
        {props.current_chip <= 0 && <p className="current-chip">Your out of money!</p>}
        {props.chip_ammount_won && <p className="chip-won">You won: <span>{props.chip_ammount_won}€</span></p>}
      </div>

      {props.current_chip <= 0 && <div className="reset-chips">
        <button className="btn btn-primary" onClick={(e) => props.resetChips()}>Give me more and let me gamble!</button>
      </div>}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    current_chip: state.current_chip,
    chip_ammount_won: state.chip_ammount_won,
    output_number: state.output_number,
    show_prev_bet_btn: state.show_prev_bet_btn
  }
}

function mapDispatchToProps(dispatch) {
  return {
      resetChips:() => {
          const action = {type: 'RESET_CHIPS'};
          dispatch(action);
      },
      prevBet:() => {
        const action = {type: 'PREV_BET'};
        dispatch(action);
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentChip);