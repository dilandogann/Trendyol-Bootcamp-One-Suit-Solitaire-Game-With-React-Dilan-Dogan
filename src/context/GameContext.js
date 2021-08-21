import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import Chunk from "../helpers/Chunk"
import Game from "../helpers/Game"
import CardValues from "../helpers/CardValues"
import { CompletedSetsContext } from './CompletedSetsContext';
import { ScoreContext } from './ScoreContext';
import { PreviousMovesContext } from './PreviousMovesContext';

// Our Header Context
export const GameContext = createContext();

export const GameContextProvider = ({ children }) => {
    const correctMovePoint = 10;
    const setCompletedPoint= 100;
    const [cards, setCards] = useState([]);
    const [floorCards, setFloorCards] = useState([]);
    const { updateCollectedSetsCount } = useContext(CompletedSetsContext);
    const { updateSore } = useContext(ScoreContext);
    const { prevMoves,setPrevMove,addMove } = useContext(PreviousMovesContext)

    const FirstChunk= new Chunk(6,4);
    const SecondChunk = new Chunk(5,6);
    const GameState = new Game(CardValues,8,54,50,FirstChunk,SecondChunk);
    GameState.init()
    const scoreBoardRef = useRef();

    useEffect(() => {
        setCards(GameState.tableCards);
        setFloorCards(GameState.floorCards);
    }, [] );


    const addCardToBoard = (chunkIndex, cardIndex, droppedChunkIndex) => {
        let movingCards = [];
        const updatedCards = [...cards];
        let droppedChunkLength = cards[droppedChunkIndex].length;

        //If last card of the dropped chunk's next value is equal to first card of moving cards value,push items to dropped chunk
        if (droppedChunkLength === 0 || (cards[chunkIndex][cardIndex].value === cards[droppedChunkIndex][droppedChunkLength - 1].nextValue)) {

            //Set the move to moves state 
            let movingChunkLength = cards[chunkIndex].length;
            const movingItemsLength = movingChunkLength - cardIndex + 1
            addMove(movingItemsLength, chunkIndex, droppedChunkIndex)

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

            //Update user score
            updateSore(correctMovePoint);

            //Check if there is any completed suits
            checkForCompletedDecs();
        }
    };

    const checkForCompletedDecs = () => {
        let counter = 0;
        const playingCards = [...cards];
        for (let i = 0; i < playingCards.length; i++) {
            for (let k = 0; k < playingCards[i].length; k++) {
                //If there is a card deck starts from 'A' check the cards under it 
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
                    //If 12 cards ranged
                    if (counter === 12 && index === playingCards[i].length - 1) {
                        playingCards[i].splice(k, 13);
                        const length = playingCards[i].length;
                        //If its not an empty suit make last item showing front side
                        if (length > 0) {
                            playingCards[i][length - 1].showFront = true;
                        }
                        setCards(playingCards);
                        //Update user score
                        updateSore(setCompletedPoint);
                        //Increment collected decs count
                        updateCollectedSetsCount();
                    } else {
                        counter = 0;
                    }
                }
            }
        }
    };

    //When user clicked to revoke button,set state to prev state
    const undoBack = () => {

        const prevStateArr = [...prevMoves]
        if (prevStateArr.length > 0) {
            const lastMove = prevStateArr.pop()
            setPrevMove(prevStateArr)
            const prevCards = [...cards]
            for (let i = 0; i < lastMove.itemLength; i++) {
                prevCards[lastMove.movedChunkIndex].push(prevCards[lastMove.movingChunkIndex].pop())
            }
            setCards(prevCards)
        }
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
                setCards,
                setFloorCards,
                addCardToBoard,
                checkForCompletedDecs,
                emptySuitExists,
                scoreBoardRef
            }}
        >
            {children}
        </GameContext.Provider>
    );

}

