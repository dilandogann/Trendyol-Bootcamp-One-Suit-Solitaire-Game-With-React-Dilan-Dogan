import { Grid } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core';
import CardPlaceHolder from './PlaceHolder';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
  },
}));

const PlayingCard = ({ chunk }) => {
  const classes = useStyles();

  return (
    <Grid item style={{ margin: '10px' }}>
      {chunk.length > 0 ? <Grid
        container
        direction='column'
        className={classes.container}
      >
        {chunk.map((card, cardIndex) => (
          <Grid item key={card.id}>
            <div>{card.id}</div>
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
