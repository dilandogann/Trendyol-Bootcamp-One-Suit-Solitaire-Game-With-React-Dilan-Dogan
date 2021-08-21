import React, { createContext, useState} from 'react';

export const CompletedSetsContext = createContext();

export const CompletedSetsContextProvider = ({ children }) => {

    const [collectedSetsCount, setCollectedSetsCount] = useState(0);
    const updateCount=1

    const updateCollectedSetsCount = () => {
        setCollectedSetsCount(collectedSetsCount + updateCount);
    }
    return (
        <CompletedSetsContext.Provider
            value={{
                collectedSetsCount,
                updateCollectedSetsCount,
            }}
        >
            {children}
        </CompletedSetsContext.Provider>
    );
}