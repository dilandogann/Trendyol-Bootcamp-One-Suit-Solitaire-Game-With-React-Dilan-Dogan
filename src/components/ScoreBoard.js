import { Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { ScoreContext } from '../context/ScoreContext';

const ScoreBoard = () => {
  const { score} = useContext(ScoreContext)

  return (
    <Typography variant='h5' display='inline'>
      Score:
      <Typography id="score-value" variant='body1' style={{fontWeight: 'bold',fontSize:24}} display='inline' color='secondary'>
        {' '}
        {score}
      </Typography>
    </Typography>
  );
  };

export default ScoreBoard;