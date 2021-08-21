import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GameContextProvider } from './context/GameContext';
import { CompletedSetsContextProvider } from './context/CompletedSetsContext'
import { ScoreContextProvider } from './context/ScoreContext'
import { CommonErrorContextProvider } from './context/CommonErrorContext'
import { PreviousMovesContextProvider } from './context/PreviousMovesContext'

ReactDOM.render(
  <PreviousMovesContextProvider>
    <CommonErrorContextProvider>
      <CompletedSetsContextProvider>
        <ScoreContextProvider>
          <GameContextProvider>
            <App />
          </GameContextProvider>
        </ScoreContextProvider>
      </CompletedSetsContextProvider>
    </CommonErrorContextProvider>
  </PreviousMovesContextProvider>,

  document.getElementById('root')
);
