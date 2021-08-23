import { Typography } from '@material-ui/core';
import React, {  useContext } from 'react';
import { TimerContext } from '../context/TimerContext';
import { useStyles } from '../styles/styles.Timer';

const Timer = () => {
  const { seconds,formatTime } = useContext (TimerContext);
  const classes = useStyles();

  return (
    <div className={classes.timeContainer}>
    <Typography className={classes.timeText} variant='h5' display='inline'>
      Time:
      </Typography>
      <Typography  className={classes.timeValueText} display='inline' variant='body1' style={{fontWeight: 'bold',fontSize:24}} color='secondary'>
        {' '}
        {formatTime(seconds)}
        {'  '}
      </Typography>

    </div>
  );
};

export default Timer;
