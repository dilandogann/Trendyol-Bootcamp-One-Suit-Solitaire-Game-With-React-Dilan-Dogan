import { Container, Grid } from '@material-ui/core';
import React from 'react';
import Timer from './Timer';
import ScoreBoard from './ScoreBoard';


const PlayGround = () => {

  return (
    <Container maxWidth='lg'>
      <Grid>
        <Timer/>
        <ScoreBoard/>
      </Grid>
    </Container>
  );
};

export default PlayGround;
