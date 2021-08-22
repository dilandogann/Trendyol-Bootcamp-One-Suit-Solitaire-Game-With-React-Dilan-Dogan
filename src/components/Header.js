import {
  AppBar,
  Avatar,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import ScoreBoard from './ScoreBoard';
import Timer from './Timer';
import solitareLogo from '../assets/solitareLogo.jfif';
import { useStyles } from '../styles/styles.Header';
import UndoMoveButton from './UndoMoveButton';
import RestartGameButton from './RestartGameButton';

const Header = () => {

  const classes = useStyles();
  return (
    <AppBar position='fixed' elevation={3} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.solitare}>
          <Avatar src={solitareLogo} className={classes.avatar} />
          <p id="header-text">Spider Solitare</p>
        </div>
        <div className={classes.timeScore}>
          <Timer />
          <ScoreBoard />
        </div>
        <div style={{display:'flex'}}>
          <UndoMoveButton/>
          <RestartGameButton/>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
