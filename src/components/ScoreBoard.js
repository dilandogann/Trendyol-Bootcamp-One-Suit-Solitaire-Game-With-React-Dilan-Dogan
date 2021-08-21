import { Typography } from '@material-ui/core';
import React, { forwardRef, useState, useImperativeHandle } from 'react';

const ScoreBoard = forwardRef((props, ref) => {
  const [score, setScore] = useState(0);

  useImperativeHandle(ref, () => ({
    updateUserScore(addedScore) {
      setScore(score + addedScore);
    },
  }));

  return (
    <Typography variant='h5' display='inline'>
      Score:
      <Typography variant='body1' style={{fontWeight: 'bold',fontSize:24}} display='inline' color='secondary'>
        {' '}
        {score}
      </Typography>
    </Typography>
  );
});

export default ScoreBoard;