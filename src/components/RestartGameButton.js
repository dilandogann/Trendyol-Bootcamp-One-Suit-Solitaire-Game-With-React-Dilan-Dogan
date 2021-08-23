
import {
    Button,
} from '@material-ui/core';
import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import { useStyles } from '../styles/styles.NewGameButton';

const RestartGameButton = () => {
    const { restartGame } = useContext(GameContext);
    const classes = useStyles();

    return (
            <Button className={classes.newGameButton} id="new-game-button" color='secondary' variant='contained' onClick={() => restartGame()}>
                New Game
            </Button>
    );
};

export default RestartGameButton;