import { Container, Grid } from '@material-ui/core';
import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import Timer from './Timer';
import ScoreBoard from './ScoreBoard';
import FloorCards from '../../../solitare/src/components/FloorCards';
import CollectedDecs from '../../../solitare/src/components/CollectedDecs';
import CommonErrorAlertComponent from '../../../solitare/src/components/CommonErrorAlertComponent';
import { GameContext } from '../../../solitare/src/context/GameContext';
import GameDecks from '../../../solitare/src/components/GameDecks';

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

    const classes = useStyles();
    const { scoreBoardRef } = useContext(GameContext);

    return (
        <Container maxWidth='lg'>
          <CommonErrorAlertComponent/>
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
                        <FloorCards/>
                    </Grid>
                </div>
                <div>
                    <Grid item xs={12} md={9} className={classes.collectedDecsGrid}>
                        <CollectedDecs />
                    </Grid>
                </div>
            </Grid>
            <GameDecks />
        </Container>
    );
};

export default PlayGround;
