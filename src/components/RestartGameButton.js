
import {
    Button,
} from '@material-ui/core';
import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';

const RestartGameButton = () => {
    const { restartGame } = useContext(GameContext);

    return (
        <div>
            <Button id="new-game-button" color='secondary' variant='contained' onClick={() => restartGame()}>
                New Game
            </Button>
        </div>
    );
};

export default RestartGameButton;