import { Grid } from '@material-ui/core';
import React, { useContext } from 'react';
import Single from './Single';
import { makeStyles } from '@material-ui/core';
import { useDrop } from 'react-dnd';
import CardPlaceHolder from './CardPlaceHolder';
import { GameContext } from '../context/GameContext';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
  },
}));

const PlayingCard = ({ chunk , chunkIndex}) => {
  const classes = useStyles();
  const { addCardToBoard} = useContext(GameContext);

  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: 'image',
    canDrop: (item) => isDroppable(item),
    drop: (item) => {
      addCardToBoard(
        item.chunkIndex,
        item.cardIndex,
        chunkIndex
      );
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  
  const isDroppable = (item) => {
    if (chunk.length === 0)
      return true;
    else if (chunk[chunk.length - 1] && item.card.value === chunk[chunk.length - 1].nextValue) {
      return true;
    }
  };

  const checkDraggable = (chunkIndex) => {
    for (let i = chunkIndex; i < chunk.length - 1; i++) {
      if (chunk[i].nextValue !== chunk[i + 1].value) return false;
    }
    return true;
  };

  return (
    <Grid item style={{ margin: '10px' }}>
      {chunk.length > 0 ? <Grid
        container
        direction='column'
        className={classes.container}
      >
        {chunk.map((card, cardIndex) => (
          <Grid item key={card.id}>
            <Single
              card={card}
              chunkIndex={chunkIndex}
              cardIndex={cardIndex}
              length={chunk.length}
              isDraggable={() => checkDraggable(cardIndex)}
            />
          </Grid>
        ))}
      </Grid> :
        <Grid
          container
          direction='column'
          className={classes.container}
        >
          <CardPlaceHolder />
        </Grid>}
    </Grid>
  );
};

export default PlayingCard;
