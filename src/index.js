import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GameContextProvider } from './context/GameContext';
import { CompletedSetsContextProvider } from './context/CompletedSetsContext'
import { ScoreContextProvider } from './context/ScoreContext'
import { CommonErrorContextProvider } from './context/CommonErrorContext'
import { PreviousMovesContextProvider } from './context/PreviousMovesContext'
import { GameFinishedContextProvider } from './context/GameFinishedContext'
import { TimerContextProvider } from './context/TimerContext'

ReactDOM.render(
  <TimerContextProvider>
    <GameFinishedContextProvider>
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
      </PreviousMovesContextProvider>
    </GameFinishedContextProvider>
  </TimerContextProvider>,

  document.getElementById('root')
);
