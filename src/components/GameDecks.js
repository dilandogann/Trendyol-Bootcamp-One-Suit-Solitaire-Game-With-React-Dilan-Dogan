import { Grid } from '@material-ui/core';
import React, { useContext } from 'react';
import PlayingCard from './PlayingCard';
import { v4 as uuidv4 } from 'uuid';
import { GameContext } from '../context/GameContext';
import { useStyles } from '../styles/styles.GameDecs';

const GameDecks = () => {
  const { tableCards} = useContext(GameContext);
  const classes = useStyles();
  return (
    <Grid container className={classes.container} data-testid="">
      {tableCards.map((chunk, chunkIndex) => (
        <PlayingCard
          key={uuidv4()}
          chunkIndex={chunkIndex}
          chunk={chunk}
        />
      ))}
    </Grid>
  );
};

export default GameDecks;
