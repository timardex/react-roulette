import React from 'react';
import { Provider } from 'react-redux';

import './App.scss';

import store from './store';

import RotateDevice from './components/rotate-device';
import GameHeader from './components/game-header';
import SelectedNumbers from './components/selected-numbers';
import Buttons from './components/buttons';
import InfoList from './components/info-list';

import WheelStand from './components/the-table/wheel-stand';
import NoMoreBets from './components/the-table/no-more-bets';
import One2One from './components/the-table/one-2-one';
import Dozens from './components/the-table/dozens';
import Racetrack from './components/the-table/racetrack';
import ColumnNumbers from './components/the-table/column-numbers';
import NumbersFirstColumn from './components/the-table/numbers-first-column';
import NumbersSecondColumn from './components/the-table/numbers-second-column';
import NumbersThirdColumn from './components/the-table/numbers-third-column';
import Number0 from './components/the-table/number-0';



const App = () => {
  return (
    <Provider store={store}>
      <div className="roulette-game container-fluid">
        <RotateDevice />
        <div id="content" className="d-none d-sm-block">
          <GameHeader />

          <div className="row">
            <div className="col-12">
              <div className="the-table">
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
            </div>

            <div className="col-12">
              <Buttons />
              <SelectedNumbers />
            </div>
          </div>

          <InfoList />

        </div>
      </div>
    </Provider>
  );
}

export default App;
