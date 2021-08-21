import { Container, Grid } from '@material-ui/core';
import React from 'react';
import FloorCards from './FloorCards';
import CollectedSets from './CollectedSets';
import GameDecks from './GameDecks';
import CommonErrorAlertComponent from './CommonErrorAlertComponent';
import { useStyles } from '../styles/styles.PlayGround';

const PlayGround = () => {
  const classes = useStyles();

  return (
    <Container maxWidth='lg'>
      <CommonErrorAlertComponent />
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
            <CollectedSets />
          </Grid>
        </div>
      </Grid>
      <GameDecks />
    </Container>
  );
};

export default PlayGround;
