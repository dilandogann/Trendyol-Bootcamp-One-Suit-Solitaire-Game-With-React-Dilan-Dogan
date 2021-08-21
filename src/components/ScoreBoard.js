import React, { forwardRef, useState, useImperativeHandle, useContext } from 'react';
import { ScoreContext } from '../context/ScoreContext';

const ScoreBoard = forwardRef((props, ref) => {

    const {score} = useContext(ScoreContext);

    return (
        <div>
            <header >
                Score:{score}
            </header>
        </div>
    );
});

export default ScoreBoard;