import {
    Button,
  } from '@material-ui/core';
  import React, { useContext } from 'react';
  import { GameContext } from '../context/GameContext';
  import { useStyles } from '../styles/styles.UndoButton';
  import UndoIcon from '@material-ui/icons/Undo';
  import { PreviousMovesContext } from '../context/PreviousMovesContext';
  
  const UndoMoveButton = () => {
    const { undoMove } = useContext(GameContext);
    const { prevMoves } = useContext(PreviousMovesContext)

    const classes = useStyles();
    return (
          <div>
            <Button
              testid="background"
              id="undo-move-button"
              variant="contained"
              color="primary"
              className={classes.undoButton}
              startIcon={<UndoIcon />}
              style={{ marginRight: '10px' }}
              onClick={() => undoMove()}
              disabled={prevMoves.length === 0}
            >
              Undo
            </Button>
          </div>
    );
  };
  
  export default UndoMoveButton;
  