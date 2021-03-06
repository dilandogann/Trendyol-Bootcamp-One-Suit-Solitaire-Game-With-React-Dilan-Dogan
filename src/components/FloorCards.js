import React, { useContext, useState } from 'react';
import { CommonErrorContext } from '../context/CommonErrorContext';
import { GameContext } from '../context/GameContext';
import { PreviousMovesContext } from '../context/PreviousMovesContext';
import { useStyles } from '../styles/styles.FloorCards';
import { ImageHelper }from '../helpers/ImageHelper'

const FloorCards = () => {
  const classes = useStyles();

  const { tableCards, floorCards, setTableCards, setFloorCards, checkIfThereIsAnyCompletedSets,chunkSize } = useContext(GameContext);
  const { addMove } = useContext(PreviousMovesContext)
  const { updateError } = useContext(CommonErrorContext);
  const [remainingCardClaim, setRemainingCardClaim] = useState(5);

  const calculateRemainingCardClaim = () =>{
    return floorCards.length/chunkSize
  }
  const dealCards = () => {
    if (!emptyChunkExists()) {
      const prevCards = floorCards;
      const splicedCards = prevCards.splice(-10);
      setFloorCards(prevCards);
      setRemainingCardClaim(remainingCardClaim - 1);
      dealFloorCards(splicedCards);
      checkIfThereIsAnyCompletedSets()
      addMove(0, 0, 0, false, 'dealing')
    }
    else {
      const error = { show: true, message: "You can not deal cards when a chunk empty!" }
      updateError(error);
    }

  };

  const dealFloorCards = (dealingCards) => {
    const prevCards = tableCards;
    for (let i = 0; i < 10; i++) {
      dealingCards[i].showFront = true;
      prevCards[i].push(dealingCards[i]);
    }
    setTableCards(() => [...prevCards]);
  };


  //If there is any empty chunk,dont deal floor cards
  const emptyChunkExists = () => {
    for (let i = 0; i < tableCards.length; i++) {
      if (tableCards[i].length === 0)
        return true
    }
    return false
  }

  return (
    <>
      {[...Array(calculateRemainingCardClaim())].map((item, index) => (
        <img
          key={index}
          className={classes.imageBox}
          src={ImageHelper()}
          alt='closedCard'
          onClick={() => dealCards()}
        />
      ))}
    </>
  );
};

export default FloorCards;
