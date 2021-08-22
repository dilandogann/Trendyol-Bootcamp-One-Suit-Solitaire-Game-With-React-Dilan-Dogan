import React, { createContext, useState } from 'react';

export const PreviousMovesContext = createContext();

export const PreviousMovesContextProvider = ({ children }) => {

    const [prevMoves, setPrevMove] = useState([]);

    const addMove = (movingItemsLength, movingChunkIndex, movedChunkIndex,showFront) => {
        const prevStateArr = [...prevMoves]
        const move = { movingItemsLength: movingItemsLength, movedChunkIndex: movedChunkIndex, movingChunkIndex: movingChunkIndex ,showFront:showFront}
        prevStateArr.push(move)
        setPrevMove(prevStateArr)
    }


    return (
        <PreviousMovesContext.Provider
            value={{
                prevMoves,
                setPrevMove,
                addMove
            }}
        >
            {children}
        </PreviousMovesContext.Provider>
    );
}