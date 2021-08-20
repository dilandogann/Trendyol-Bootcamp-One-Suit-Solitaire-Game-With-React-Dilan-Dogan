import { Grid, makeStyles } from '@material-ui/core';
import React, { useContext } from 'react';
import PlayingCard from './PlayingCard';
import { v4 as uuidv4 } from 'uuid';
import { GameContext } from '../context/GameContext';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 150,
    flexWrap: 'nowrap',
    [theme.breakpoints.down('sm')]: {
      marginTop: 100,
    },
  },
}));

const GameDecks = () => {
  const { cards} = useContext(GameContext);
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      {cards.map((chunk, chunkIndex) => (
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
