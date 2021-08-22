import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, Typography } from '@material-ui/core';
import { useStyles } from '../styles/styles.Rules';

export default function Rules({open,setOpen}) {
  const classes = useStyles();
  // const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

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
            <Typography
              variant='h3'
              className={classes.title}
              gutterBottom
              id='transition-modal-title'
            >
              Spider Solitare
            </Typography>
            <Typography
              className={classes.description}
              align='center'
              gutterBottom
              id='transition-modal-description'
            >
              Before you begin, here are the game rules
            </Typography>
            <Typography
            className={classes.rule}
              align='left'
              gutterBottom
              id='transition-modal-description'
            >
              This is a Reversed Spider Solitare game which means the cards
              should be sorted from{' '}
              <span className={classes.reversed}>A to K</span>.
            </Typography>
            <Typography
              align='left'
              gutterBottom
              id='transition-modal-description'
            >
              You cannot drag an item unless it is the last element or it is in an ordered card list.
            </Typography>
            <Typography
              className={classes.rule}
              align='left'
              gutterBottom
              id='transition-modal-description'
            >
            You must collect 8 sorted card list from A to K in order to win the game.
            </Typography>
            <Typography
              className={classes.rule}
              align='center'
              gutterBottom
              id='transition-modal-description'
            >
            GOOD LUCK !
            </Typography>
            <Button variant='contained' color='secondary' onClick={handleClose}>
              Let's Play
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
