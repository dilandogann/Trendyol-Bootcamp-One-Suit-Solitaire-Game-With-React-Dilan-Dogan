import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useDrag } from 'react-dnd';
import { ImageHelper }from '../helpers/ImageHelper'

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

const Single = ({ card, click, chunkIndex, cardIndex, isDraggable }) => {
  const classes = useStyles(cardIndex);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'image',
    item: { card, chunkIndex, cardIndex },
    canDrag: () => isDraggable(),
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return card.showFront ? (
    <img
      ref={drag}
      src={ImageHelper(card.value)}
      alt={ImageHelper(card.value)}
      className={classes.showFront}
      onClick={click}
      style={{ border: isDragging ? '3px solid pink' : '0px' }}
    />
  ) : (
    <img
      src={ImageHelper()}
      alt={ImageHelper()}
      className={classes.card}
      onClick={click}
    />
  );
};

export default Single;
