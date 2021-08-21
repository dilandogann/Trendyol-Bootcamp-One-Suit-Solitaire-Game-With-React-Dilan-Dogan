import React, { createContext, useContext, useEffect, useState } from 'react';
import Chunk from "../helpers/Chunk"
import Game from "../helpers/Game"
import CardValues from "../helpers/CardValues"
import { CompletedSetsContext } from './CompletedSetsContext';
import { ScoreContext } from './ScoreContext';
import { PreviousMovesContext } from './PreviousMovesContext';
import { GameFinishedContext } from './GameFinishedContext';
import { TimerContext } from './TimerContext';

// Our Header Context
export const GameContext = createContext();

const correctMovePoint = 10;
const setCompletedPoint = 100;
const firstChunkSize = 6;
const firstChunkQuantity = 4
const secondChunkSize = 5;
const secondChunkQuantity = 6;
const decCount = 8;
const tableCardsCount = 54;
const floorCardsCount = 50;

const FirstChunk = new Chunk(firstChunkSize, firstChunkQuantity);
const SecondChunk = new Chunk(secondChunkSize, secondChunkQuantity);
const GameState = new Game(CardValues, decCount, tableCardsCount, floorCardsCount, FirstChunk, SecondChunk);
GameState.init()

export const GameContextProvider = ({ children }) => {

    const [tableCards, setTableCards] = useState([]);
    const [floorCards, setFloorCards] = useState([]);

    const { updateCollectedSetsCount } = useContext(CompletedSetsContext);
    const { updateSore } = useContext(ScoreContext);
    const { prevMoves, setPrevMove, addMove } = useContext(PreviousMovesContext)
    const { handleOpen } = useContext(GameFinishedContext);
    const { stopInterval,setMyInterval } = useContext(TimerContext);

    useEffect(() => {
        setTableCards(GameState.tableCards);
        setFloorCards(GameState.floorCards);
    }, GameState.cards);
    
    const restartGame = () =>{
        GameState.restartGameState()
        GameState.init()
        stopInterval()
        setMyInterval()
    }

    const makeMove = (movingCardIndex, movingChunkIndex, droppedChunkIndex) => {

        if (moveItemsToDroppedChunk(movingCardIndex, movingChunkIndex, droppedChunkIndex)) {

            //Update user score
            updateSore(correctMovePoint);
            //Check if there is any completed suits
            checkIfThereIsAnyCompletedSets()
            //Check ıf game completed
            checkIfGameCompleted()
        }
    };

    const checkIfGameCompleted = () => {
            stopInterval()
            handleOpen()
    }
    const checkIfThereIsAnyCompletedSets = () => {

        if (setCompleted()) {
            //Update user score
            updateSore(setCompletedPoint);
            //Increment collected decs count
            updateCollectedSetsCount();
        }
    }

    const moveItemsToDroppedChunk = (movingCardIndex, movingChunkIndex, droppedChunkIndex) => {
        let movingCards = [];
        const updatedCards = [...tableCards];
        let droppedChunkLength = tableCards[droppedChunkIndex].length;

        //If dropping chunk is empty or last card of the dropped chunk's next value is equal to first card of moving cards value,push items to dropped chunk
        if (droppedChunkLength === 0 || (tableCards[movingChunkIndex][movingCardIndex].value === tableCards[droppedChunkIndex][droppedChunkLength - 1].nextValue)) {
            console.log("a")
            //Set the move to moves state 
            let movingChunkLength = tableCards[movingChunkIndex].length;
            const movingItemsLength = movingChunkLength - movingCardIndex + 1
            addMove(movingItemsLength, movingChunkIndex, droppedChunkIndex)

            for (let i = movingCardIndex; i < movingChunkLength; i++) {
                movingCards.push(tableCards[movingChunkIndex][i]);
            }
            updatedCards[droppedChunkIndex].push(...movingCards);

            // Delete the dragged element from its original position.
            updatedCards[movingChunkIndex].splice(movingCardIndex, movingCards.length);

            //Make last card of the movingChunk showFront true
            if (updatedCards[movingChunkIndex].length > 0) {
                updatedCards[movingChunkIndex][movingCardIndex - 1].showFront = true;
            }
            //Update cards state
            setTableCards(updatedCards);

            return true;

        }
        else {
            return false;

        }
    };

    const setCompleted = () => {
        let counter = 0;
        const playingCards = [...tableCards];
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
                        setTableCards(playingCards);

                        return true;

                    } else {
                        counter = 0;
                    }
                }
            }
        }
        return false;
    };

    //When user clicked to revoke button,set state to prev state
    const undoBack = () => {

        const prevStateArr = [...prevMoves]
        if (prevStateArr.length > 0) {
            const lastMove = prevStateArr.pop()
            setPrevMove(prevStateArr)
            const prevCards = [...tableCards]
            for (let i = 0; i < lastMove.itemLength; i++) {
                prevCards[lastMove.movedChunkIndex].push(prevCards[lastMove.movingChunkIndex].pop())
            }
            setTableCards(prevCards)
        }
    }

    return (
        <GameContext.Provider
            value={{
                tableCards,
                floorCards,
                setTableCards,
                setFloorCards,
                makeMove,
                checkIfThereIsAnyCompletedSets,
                restartGame
            }}
        >
            {children}
        </GameContext.Provider>
    );

}

