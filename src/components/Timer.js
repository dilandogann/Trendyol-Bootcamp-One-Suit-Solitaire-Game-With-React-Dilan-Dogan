import { Typography } from '@material-ui/core';
import React, {  useContext } from 'react';
import { TimerContext } from '../context/TimerContext';

const Timer = () => {
  const { seconds,formatTime } = useContext (TimerContext);

  return (
    <Typography variant='h5' display='inline'>
      Time:
      <Typography display='inline' variant='body1' style={{fontWeight: 'bold',fontSize:24}} color='secondary'>
        {' '}
        {formatTime(seconds)}
        {'  '}
      </Typography>
    </Typography>
  );
};

export default Timer;
