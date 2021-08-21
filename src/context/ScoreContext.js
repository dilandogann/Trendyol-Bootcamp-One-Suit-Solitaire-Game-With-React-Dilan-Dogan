import React, { createContext, useState} from 'react';

export const ScoreContext = createContext();

export const ScoreContextProvider = ({ children }) => {

    const [score, setSore] = useState(0);

    const updateSore = (val) => {
        setSore(score + val);
    }
    return (
        <ScoreContext.Provider
            value={{
                score,
                updateSore,
            }}
        >
            {children}
        </ScoreContext.Provider>
    );
}