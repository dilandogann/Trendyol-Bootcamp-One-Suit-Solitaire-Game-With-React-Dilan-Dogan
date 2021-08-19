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

    const collectedDecsRef = useRef();
    const scoreBoardRef= useRef();

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
    const addCardToBoard = (chunkIndex, cardIndex, droppedChunkIndex) => {
        let movingCards = [];
        const updatedCards = [...cards];
        let droppedChunkLength = cards[droppedChunkIndex].length;
    
        //If chunk is empty or  last card of the dropped chunk's next value is equal to first card of moving cards value,push items to dropped chunk
        if(droppedChunkLength === 0 || ( cards[chunkIndex][cardIndex].value === cards[droppedChunkIndex][droppedChunkLength - 1].nextValue )){
          let movingChunkLength = cards[chunkIndex].length;
          for (let i = cardIndex; i < movingChunkLength; i++) {
            movingCards.push(cards[chunkIndex][i]);
          }
          updatedCards[droppedChunkIndex].push(...movingCards);
    
          // Delete the dragged element from its original position.
          updatedCards[chunkIndex].splice(cardIndex, movingCards.length);
          //Make last card of the movingChunk showFront true
          if (updatedCards[chunkIndex].length > 0) {
            updatedCards[chunkIndex][cardIndex - 1].showFront = true;
          }
          //Update cards state
          setCards(updatedCards);
          //Update collected chunk count
          collectedDecsRef.current.setDeckAsCollected();
          //Update user score
          scoreBoardRef.current.updateUserScore(10);
        }
      };



    return (
        <Container maxWidth='lg'>
            <Grid>
                <Timer />
                <ScoreBoard ref={scoreBoardRef}/>
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
