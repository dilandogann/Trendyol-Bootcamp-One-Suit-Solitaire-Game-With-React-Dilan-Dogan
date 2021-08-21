import React, { createContext, useState} from 'react';

export const ScoreContext = createContext();

export const ScoreContextProvider = ({ children }) => {

    const [score, setScore] = useState(0);

    const updateScore = (val) => {
        setScore(score + val);
    }
    return (
        <ScoreContext.Provider
            value={{
                score,
                setScore,
                updateScore,
            }}
        >
            {children}
        </ScoreContext.Provider>
    );
}