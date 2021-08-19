import { Container, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { initializeCards } from '../game/useLogic';
import Timer from './Timer';
import ScoreBoard from './ScoreBoard';


const PlayGround = () => {

    const [cards, setCards] = useState([]);
    const [floorCards, setFloorCards] = useState([]);

    useEffect(() => {
        const { playingCards, floorCards } = initializeCards();
        setCards(playingCards);
        setFloorCards(floorCards);
      }, []);

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
