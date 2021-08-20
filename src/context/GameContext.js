import React, { createContext, useEffect, useRef, useState } from 'react';
import { initializeCards } from '../game/useLogic';


// Our Header Context
export const GameContext = createContext();

export const GameContextProvider = ({ children }) => {

    const [cards, setCards] = useState([]);
    const [floorCards, setFloorCards] = useState([]);
    const [collectedDecsCount, setCollectedDecsCount] = useState(0);
    const [prevMoves, setPrevMoves] = useState([]);
    const [commonError, setCommonError] = useState({ show: false, message: "" });

    const scoreBoardRef = useRef();

    useEffect(() => {
        const { playingCards, floorCards } = initializeCards();
        setCards(playingCards);
        setFloorCards(floorCards);
    }, []);


    const addCardToBoard = (chunkIndex, cardIndex, droppedChunkIndex) => {
        let movingCards = [];
        const updatedCards = [...cards];
        let droppedChunkLength = cards[droppedChunkIndex].length;

        //If last card of the dropped chunk's next value is equal to first card of moving cards value,push items to dropped chunk
        if (droppedChunkLength === 0 || (cards[chunkIndex][cardIndex].value === cards[droppedChunkIndex][droppedChunkLength - 1].nextValue)) {
           
            //Set the move to moves state 
            let movingChunkLength = cards[chunkIndex].length;
            const movingItemsLength = movingChunkLength - cardIndex + 1
            setPrevMove(movingItemsLength, chunkIndex, droppedChunkIndex)
            
            for (let i = cardIndex; i < movingChunkLength; i++) {
                movingCards.push(cards[chunkIndex][i]);
            }
            updatedCards[droppedChunkIndex].push(...movingCards);

            // Delete the dragged element from its original position.
            updatedCards[chunkIndex].splice(cardIndex, movingCards.length);
            //Make last card of the movingChunk showFront true
            if (updatedCards[chunkIndex].length > 0) {
                updatedCards[chunkIndex][cardIndex - 1].showFront = true;
            }
            //Update cards state
            setCards(updatedCards);
            //Update score
            scoreBoardRef.current.updateUserScore(10);
            //Check if there is any completed suits
            checkForCompletedDecs();
        }
    };

    const checkForCompletedDecs = () => {
        let counter = 0;
        const playingCards = [...cards];
        for (let i = 0; i < playingCards.length; i++) {
            for (let k = 0; k < playingCards[i].length; k++) {
                if (playingCards[i][k].value === 'A') {
                    let index = k;
                    while (index !== playingCards[i].length - 1) {
                        if (
                            playingCards[i][index].nextValue ===
                            playingCards[i][index + 1].value
                        ) {
                            counter++;
                            index++;
                        } else {
                            counter = 0;
                            break;
                        }
                    }
                    if (counter === 12 && index === playingCards[i].length - 1) {
                        playingCards[i].splice(k, 13);
                        const length = playingCards[i].length;
                        //If its not an empty suit
                        if (length > 0) {
                            playingCards[i][length - 1].showFront = true;
                        }
                        setCards(playingCards);
                        // //Update score
                        scoreBoardRef.current.updateUserScore(10);

                        setCollectedDecsCount(collectedDecsCount + 1);
                    } else {
                        counter = 0;
                    }
                }
            }
        }
    };

    const setPrevMove = (itemLength, movingChunkIndex, movedChunkIndex) => {
        const prevStateArr = [...prevMoves]
        const move = { itemLength: itemLength, movedChunkIndex: movedChunkIndex, movingChunkIndex: movingChunkIndex }
        prevStateArr.push(move)
        setPrevMoves(prevStateArr)
    }

        //If there is any empty suit,dont deal floor cards
        const emptySuitExists = () => {
            for (let i = 0; i < cards.length; i++) {
                if (cards[i].length === 0)
                    return true
            }
            return false
        }

    return (
        <GameContext.Provider
            value={{
                cards,
                floorCards,
                collectedDecsCount,
                commonError,
                setCards,
                setFloorCards,
                addCardToBoard,
                checkForCompletedDecs,
                setCommonError,
                scoreBoardRef
            }}
        >
            {children}
        </GameContext.Provider>
    );

}

