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

const Header = () => {
  const { scoreBoardRef, restartGame } = useContext(GameContext);

  const classes = useStyles();
  return (
    <AppBar position='fixed' elevation={3} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.solitare}>
          <Avatar src={solitareLogo} className={classes.avatar} />
          <Typography variant='h5'>Spider Solitare</Typography>
        </div>

        <div className={classes.timeScore}>
          <Timer />
          <ScoreBoard ref={scoreBoardRef} />
        </div>

        <div>
          <Button color='secondary' variant='contained' onClick={()=>restartGame()}>
            New Game
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
