import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import heartsBack from '../assets/hearts-back.jpg';

const useStyles = makeStyles((theme) => ({
  imageBox: {
    borderRadius: '10px',
    marginLeft: '-50px',
    boxShadow: '10px 10px 6px 0px rgba(0,0,0,0.75)',
    webkitBoxShadow: '10px 10px 6px 0px rgba(0,0,0,0.75)',
    mozBoxShadow: '10px 10px 6px 0px rgba(0,0,0,0.75)',
    width: '90px',
    [theme.breakpoints.down('md')]: {
        width: '75px',
      },
  },
}));

const FloorCards = ({ floorCards, dealFloorCards, setFloorCards }) => {
  const classes = useStyles();

  const [remainingCardClaim, setRemainingCardClaim] = useState(5);

  const dealTheCards = () => {
    //Set floorcards to prev state
    const prevCards = floorCards;
    //Get last 10 item of the floor cards
    const splicedCards = prevCards.splice(-10);
    //Set new floor cards state
    setFloorCards(prevCards);
    //Reduce 1 card dealing claim
    setRemainingCardClaim(remainingCardClaim - 1);
    //Send spliced floor cards to playGround component
    dealFloorCards(splicedCards);
  };
  return (
    <>
      {[...Array(remainingCardClaim)].map((item, index) => (
        <img
          key={index}
          className={classes.imageBox}
          src={heartsBack}
          alt='closedCard'
          onClick={() => dealTheCards()}
        />
      ))}
    </>
  );
};

export default FloorCards;
