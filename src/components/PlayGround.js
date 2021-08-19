import { Container, Grid } from '@material-ui/core';
import React, { useEffect, useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core';
import { initializeCards } from '../game/useLogic';
import Timer from './Timer';
import ScoreBoard from './ScoreBoard';
import FloorCards from '../../../solitare/src/components/FloorCards';
import CollectedDecs from '../../../solitare/src/components/CollectedDecs';

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
        '&:hover': {
            transform: 'scaleY(1.05)',
        },
    },
    collectedDecsGrid: {
        display: 'flex',
        flexWrap: 'no-wrap',
        [theme.breakpoints.up('md')]: {
          marginLeft: 'auto',
        },
      },
}));

const PlayGround = () => {

    const [cards, setCards] = useState([]);
    const [floorCards, setFloorCards] = useState([]);

    const classes = useStyles();

    useEffect(() => {
        const { playingCards, floorCards } = initializeCards();
        setCards(playingCards);
        setFloorCards(floorCards);
    }, []);

    const dealFloorCards = (dealingCards) => {
        const prevCards = cards;
        for (let i = 0; i < 10; i++) {
            dealingCards[i].showFront = true;
            prevCards[i].push(dealingCards[i]);
        }
        setCards(() => [...prevCards]);
    };

    const collectedDecsRef = useRef();

    return (
        <Container maxWidth='lg'>
            <Grid>
                <Timer />
                <ScoreBoard />
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
                        <FloorCards
                            floorCards={floorCards}
                            dealFloorCards={dealFloorCards}
                            setFloorCards={setFloorCards}
                        />
                    </Grid>
                </div>
                <div>
                    <Grid item xs={12} md={9} className={classes.collectedDecsGrid}>
                        <CollectedDecs ref={collectedDecsRef} />
                    </Grid>
                </div>
            </Grid>
        </Container>
    );
};

export default PlayGround;
