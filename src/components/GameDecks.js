import { Grid, makeStyles } from '@material-ui/core';
import React, { useContext } from 'react';
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
  const { cards } = useContext(GameContext);
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      {cards.map((chunk, chunkIndex) => (
        <div>{{ chunkIndex }}</div>
      ))}
    </Grid>
  );
};

export default GameDecks;
