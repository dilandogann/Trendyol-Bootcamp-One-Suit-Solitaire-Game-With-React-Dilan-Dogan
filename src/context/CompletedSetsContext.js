import React, { createContext, useRef, useState } from 'react';

export const CompletedSetsContext = createContext();
const updateCount = 1

export const CompletedSetsContextProvider = ({ children }) => {

    const collectedCount = useRef(0)
    const [collectedSetCount,setCollectedSetCount] = useState(0);

    const updateCollectedSetsCount = () => {
        const nextCount = collectedCount.current+updateCount
        collectedCount.current=nextCount
        setCollectedSetCount(collectedCount.current)
    }
    return (
        <CompletedSetsContext.Provider
            value={{
                collectedCount,
                collectedSetCount,
                setCollectedSetCount,
                updateCollectedSetsCount,
            }}
        >
            {children}
        </CompletedSetsContext.Provider>
    );
}