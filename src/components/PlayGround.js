import { Container, Grid } from '@material-ui/core';
import React, { useContext} from 'react';
import { makeStyles } from '@material-ui/core';
import FloorCards from './FloorCards';
import CollectedDecs from './CollectedDecs';
import GameDecks from './GameDecks';
import Timer from './Timer';
import ScoreBoard from './ScoreBoard';
import { GameContext } from '../context/GameContext';
import CommonErrorAlertComponent from './CommonErrorAlertComponent';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 35,
  },
  floorAndCollectedContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'no-wrap',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    },
  },
  newDeck: {
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    // marginLeft:20,
    '&:hover': {
      transform: 'scaleY(1.05)',
    },
  },
  collectedDecsGrid: {
    display: 'flex',
    // marginLeft: 'auto',
    flexWrap: 'no-wrap',
    [theme.breakpoints.up('md')]: {
      marginLeft: 'auto',
    },
  },
}));

const PlayGround = () => {

  const classes = useStyles();
  const { scoreBoardRef } = useContext(GameContext);

  return (
    <Container maxWidth='lg' className={classes.container}>
      <CommonErrorAlertComponent/>
      <Grid>
        <Timer />
        <ScoreBoard ref={scoreBoardRef} />
      </Grid>
      <Grid
        style={{ marginTop: '100px' }}
        container
        className={classes.floorAndCollectedContainer}
        spacing={6}
      >
        <div>
          <Grid
            item
            xs={12}
            md={3}
            className={classes.newDeck}
            style={{ display: 'flex' }}
          >
            <FloorCards />
          </Grid>
        </div>
        <div>
          <Grid item xs={12} md={9} className={classes.collectedDecsGrid}>
            <CollectedDecs/>
          </Grid>
        </div>
      </Grid>
      <GameDecks />
    </Container>
  );
};

export default PlayGround;
