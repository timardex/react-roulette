import React from 'react';
import {connect} from 'react-redux';

import WheelStand from './WheelStand';
import NoMoreBets from './no-more-bets';
import One2One from './one-2-one';
import Dozens from './dozens';
import Racetrack from './racetrack';
import ColumnNumbers from './column-numbers';
import NumbersFirstColumn from './numbers-first-column';
import NumbersSecondColumn from './numbers-second-column';
import NumbersThirdColumn from './numbers-third-column';
import Number0 from './number-0';

const TheTable = props => {
  return(
    <div className={`the-table ${props.current_chip <= 0 ? 'disable': ''}`}>
      <WheelStand />
      <div className="the-table-inner">
        <NoMoreBets />
        <One2One />
        <Dozens />
        <div className="all-numbers">
          <div>
            <Number0 />
          </div>
          <div>
            <NumbersThirdColumn />
            <NumbersSecondColumn />
            <NumbersFirstColumn />
            <ColumnNumbers />
          </div>
        </div>
        <Racetrack />
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    current_chip: state.current_chip
  }
}

export default connect(mapStateToProps)(TheTable);