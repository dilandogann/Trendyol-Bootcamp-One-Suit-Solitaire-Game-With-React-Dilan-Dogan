import React, { createContext, useState } from 'react';

export const PreviousMovesContext = createContext();

export const PreviousMovesContextProvider = ({ children }) => {

    const [prevMoves, setPrevMove] = useState([]);

    const addMove = (movingItemsLength, movingChunkIndex, movedChunkIndex) => {
        const prevStateArr = [...prevMoves]
        const move = { movingItemsLength: movingItemsLength, movedChunkIndex: movedChunkIndex, movingChunkIndex: movingChunkIndex }
        prevStateArr.push(move)
        setPrevMove(prevStateArr)
        console.log(prevStateArr)
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