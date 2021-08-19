import React, { forwardRef, useState, useImperativeHandle } from 'react';

const ScoreBoard = forwardRef((props, ref) => {

    const [score, setScore] = useState(0);

    useImperativeHandle(ref, () => ({
        updateUserScore(addedScore) {
           setScore(score + addedScore)
        }
    }));

    return (
        <div>
            <header >
                Score:{score}
            </header>
        </div>
    );
});

export default ScoreBoard;