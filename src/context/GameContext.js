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
const undoPoint = -10;
const setCompletedPoint = 100;
const firstChunkSize = 6;
const firstChunkQuantity = 4
const secondChunkSize = 5;
const secondChunkQuantity = 6;
const decCount = 8;
const tableCardsCount = 54;
const floorCardsCount = 50;
const gameCompletedPoint = 200;

const FirstChunk = new Chunk(firstChunkSize, firstChunkQuantity);
const SecondChunk = new Chunk(secondChunkSize, secondChunkQuantity);
const GameState = new Game(CardValues, decCount, tableCardsCount, floorCardsCount, FirstChunk, SecondChunk);
GameState.init()

export const GameContextProvider = ({ children }) => {

    const [tableCards, setTableCards] = useState([]);
    const [floorCards, setFloorCards] = useState([]);

    const { collectedCount, setCollectedSetCount, updateCollectedSetsCount } = useContext(CompletedSetsContext);
    const { setScore, updateScore } = useContext(ScoreContext);
    const { prevMoves, setPrevMove, addMove } = useContext(PreviousMovesContext)
    const { setOpen } = useContext(GameFinishedContext);
    const { stopInterval, setMyInterval } = useContext(TimerContext);

    useEffect(() => {
        setTableCards(GameState.tableCards);
        setFloorCards(GameState.floorCards);
    }, GameState.cards);

    const restartGame = () => {
        GameState.restartGameState()
        GameState.init()
        stopInterval()
        setMyInterval()
        setScore(0)
        collectedCount.current = 0
        setCollectedSetCount(0)
        setPrevMove([])
    }

    const makeMove = (movingCardIndex, movingChunkIndex, droppedChunkIndex) => {

        if (moveItemsToDroppedChunk(movingCardIndex, movingChunkIndex, droppedChunkIndex)) {

            //Update user score
            updateScore(correctMovePoint);
            //Check if there is any completed suits
            checkIfThereIsAnyCompletedSets()

        }
    };

    const checkIfGameCompleted = () => {
        if (collectedCount.current === GameState.decCount) {
            //Update user score
            updateScore(gameCompletedPoint);
            //Stop timer
            stopInterval()
            //Open modal
            setOpen(true)
        }
    }
    const checkIfThereIsAnyCompletedSets = () => {

        if (setCompleted()) {
            //Update user score
            updateScore(setCompletedPoint);
            //Increment collected decs count
            updateCollectedSetsCount();
            //Update user score
            updateScore(setCompletedPoint);
            //Set prev moves to empty
            setPrevMove([])
            //Check ıf game completed
            checkIfGameCompleted()
        }

    }

    const moveItemsToDroppedChunk = (movingCardIndex, movingChunkIndex, droppedChunkIndex) => {
        let movingCards = [];
        const updatedCards = [...tableCards];
        let droppedChunkLength = tableCards[droppedChunkIndex].length;

        //If dropping chunk is empty or last card of the dropped chunk's next value is equal to first card of moving cards value,push items to dropped chunk
        if (droppedChunkLength === 0 || (tableCards[movingChunkIndex][movingCardIndex].value === tableCards[droppedChunkIndex][droppedChunkLength - 1].nextValue)) {

            //Set the move to moves state 
            let movingChunkLength = tableCards[movingChunkIndex].length;
            const movingItemsLength = movingChunkLength - movingCardIndex


            for (let i = movingCardIndex; i < movingChunkLength; i++) {
                movingCards.push(tableCards[movingChunkIndex][i]);
            }
            updatedCards[droppedChunkIndex].push(...movingCards);

            // Delete the dragged element from its original position.
            updatedCards[movingChunkIndex].splice(movingCardIndex, movingCards.length);

            //Make last card of the movingChunk showFront true
            if (updatedCards[movingChunkIndex].length > 0 && updatedCards[movingChunkIndex][movingCardIndex - 1].showFront === false) {
                updatedCards[movingChunkIndex][movingCardIndex - 1].showFront = true;
                addMove(movingItemsLength, movingChunkIndex, droppedChunkIndex, true, 'moving')
            }
            else {
                addMove(movingItemsLength, movingChunkIndex, droppedChunkIndex, false, 'moving')
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
    const undoMove = () => {

        const prevStateArr = [...prevMoves]
        if (prevStateArr.length > 0) {
            const lastMove = prevStateArr.pop()
            setPrevMove(prevStateArr)
            const prevCards = [...tableCards]

            if (lastMove.moving === "moving") {
                if (lastMove.showFront) {
                    prevCards[lastMove.movingChunkIndex][prevCards[lastMove.movingChunkIndex].length - 1].showFront = false
                }
                const droppedItems = prevCards[lastMove.movedChunkIndex].splice(prevCards[lastMove.movedChunkIndex].length - lastMove.movingItemsLength)
                for (let i = 0; i < droppedItems.length; i++) {
                    prevCards[lastMove.movingChunkIndex].push(droppedItems[i])
                }
                updateScore(undoPoint)
            }
            else {
                const prevFloorCards = [...floorCards]
                for (let i = 0; i < prevCards.length; i++) {
                    const popedItem = prevCards[i].pop()
                    prevFloorCards.push(popedItem)
                }
                setFloorCards(prevFloorCards)
            }
            setTableCards(prevCards)
        }
    }

    return (
        <GameContext.Provider
            value={{
                tableCards,
                floorCards,
                chunkSize: FirstChunk.quantity + SecondChunk.quantity,
                setTableCards,
                setFloorCards,
                makeMove,
                checkIfThereIsAnyCompletedSets,
                restartGame,
                undoMove
            }}
        >
            {children}
        </GameContext.Provider>
    );

}

