import { Typography } from '@material-ui/core';
import React, {useContext } from 'react';
import { ScoreContext } from '../context/ScoreContext';
import { useStyles } from '../styles/styles.Score';

const ScoreBoard = () => {

  const { score} = useContext(ScoreContext)
  const classes = useStyles();

  return (
    <div className={classes.scoreContainer}>
    <Typography className={classes.scoreText}  classvariant='h5' display='inline'>
      Score:
    </Typography>
      <Typography className={classes.scoreValueText} variant='body1' style={{fontWeight: 'bold',fontSize:24}} display='inline' color='secondary'>
        {' '}
        {score}
      </Typography>
    
    </div>
  );
};

export default ScoreBoard;