import React from 'react';
import { Provider } from 'react-redux';

import './App.scss';

import store from './store';

import RotateDevice from './components/rotate-device';
import GameHeader from './components/game-header';
import SelectedNumbers from './components/selected-numbers';
import Buttons from './components/buttons';
import InfoList from './components/info-list';

import CurrentChip from './components/the-table/current-chip';
import TheTable from './components/the-table';



const App = () => {
  return (
    <Provider store={store}>
      <div className="roulette-game container-fluid">
        <RotateDevice />
        <div id="content" className="d-none d-sm-block">
          <GameHeader />

          <div className="row">
            <div className="col-12">
              <CurrentChip />
              <TheTable />
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
