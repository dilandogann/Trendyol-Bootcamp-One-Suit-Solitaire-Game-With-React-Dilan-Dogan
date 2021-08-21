import React, { useContext } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, Typography } from '@material-ui/core';
import { useStyles } from '../styles/styles.GameFinished';
import { GameFinishedContext } from '../context/GameFinishedContext';
import Timer from './Timer';
import ScoreBoard from './ScoreBoard';
import { GameContext } from '../context/GameContext';

export default function GameFinished() {
  const classes = useStyles();
  const { open,handleClose } = useContext(GameFinishedContext);
  const { restartGame } = useContext(GameContext);

  const startNewGame =() =>{
    handleClose()
    restartGame()
  }
  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Typography variant='h3' gutterBottom id='transition-modal-title'>
              Congratulations!
            </Typography>
            <Typography
              style={{fontWeight: 'bold',fontSize:18}}
              align='center'
              gutterBottom
              id='transition-modal-description'
            >
              You finished the game successfully!
            </Typography>
            <Timer/>
            <ScoreBoard/>
            <Typography
              style={{fontWeight: 'bold',fontSize:18}}
              align='center'
              gutterBottom
              id='transition-modal-description'
            >
              Would you like to start a new game ?
            </Typography>
            <Button variant='contained' color='secondary' onClick={()=>startNewGame()} >
              New Game
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
