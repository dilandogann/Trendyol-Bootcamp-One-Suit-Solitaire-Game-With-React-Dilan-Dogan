import React from 'react';
import spadesBack from '../assets/spades-back.png';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: 12,
    marginTop: -120,
    width: '100%',
    zIndex: (cardIndex) => {
      return cardIndex;
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '120%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '140%',
    },
  },
  showFront: {
    width:100,
    borderRadius: 12,
    cursor: 'pointer',
    transition: 'transform 0.2s ease-in-out',
    marginTop: -110,
    '&:hover': {
      transform: 'scale(1.1)',
    },
    zIndex: (cardIndex) => {
      return cardIndex;
    },
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '120%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '140%',
    },
  },
}));

const Single = ({ card, click, chunkIndex, cardIndex }) => {
  const classes = useStyles(cardIndex);

  return card.showFront ? (
    <img
      src={card.image}
      alt={card.image}
      className={classes.showFront}
      onClick={click}
    />
  ) : (
    <img
      src={spadesBack}
      alt={card.image}
      className={classes.card}
      onClick={click}
    />
  );
};

export default Single;
