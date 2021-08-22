import {
  AppBar,
  Avatar,
  Button,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import ScoreBoard from './ScoreBoard';
import Timer from './Timer';
import solitareLogo from '../assets/solitareLogo.jfif';
import { useStyles } from '../styles/styles.Header';
import UndoIcon from '@material-ui/icons/Undo';
import { PreviousMovesContext } from '../context/PreviousMovesContext';

const Header = () => {
  const { scoreBoardRef, restartGame, undoMove } = useContext(GameContext);
  const { prevMoves } = useContext(PreviousMovesContext)


  const classes = useStyles();
  return (
    <AppBar position='fixed' elevation={3} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.solitare}>
          <Avatar src={solitareLogo} className={classes.avatar} />
          <Typography variant='h5' id="header-text">Spider Solitare</Typography>
        </div>

        <div className={classes.timeScore}>
          <Timer />
          <ScoreBoard ref={scoreBoardRef} />
        </div>
        <div>
          <Button
            id="restart-game-button"
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<UndoIcon />}
            style={{ marginRight: '10px' }}
            onClick={() => undoMove()}
            disabled={prevMoves.length === 0}
          >
            Undo
          </Button>
          <Button id="new-game-button" color='secondary' variant='contained' onClick={() => restartGame()}>
            New Game
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
