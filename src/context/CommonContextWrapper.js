import React from 'react'
import { GameContextProvider } from './GameContext';
import { CompletedSetsContextProvider } from './CompletedSetsContext'
import { ScoreContextProvider } from './ScoreContext'
import { CommonErrorContextProvider } from './CommonErrorContext'
import { PreviousMovesContextProvider } from './PreviousMovesContext'
import { GameFinishedContextProvider } from './GameFinishedContext'
import { TimerContextProvider } from './TimerContext'

const CommonContextWrapper = ({ children }) => {
    return (
        <TimerContextProvider>
            <GameFinishedContextProvider>
                <PreviousMovesContextProvider>
                    <CommonErrorContextProvider>
                        <CompletedSetsContextProvider>
                            <ScoreContextProvider>
                                <GameContextProvider>
                                    {children}
                                </GameContextProvider>
                            </ScoreContextProvider>
                        </CompletedSetsContextProvider>
                    </CommonErrorContextProvider>
                </PreviousMovesContextProvider>
            </GameFinishedContextProvider>
        </TimerContextProvider>

    );
}

export default CommonContextWrapper;
