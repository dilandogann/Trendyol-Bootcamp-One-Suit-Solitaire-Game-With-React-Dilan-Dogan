
import React, { createContext, useEffect, useRef, useState } from 'react';

export const TimerContext = createContext();

export const TimerContextProvider = ({ children }) => {

    const [seconds, setSeconds] = useState(0);

    const intervalRef = useRef();

    useEffect(() => {
        setMyInterval()
    }, []);


    const setMyInterval = () => {
        setSeconds(0)
        const interval = setInterval(() => {
            //Update timer state every second
            setSeconds((seconds) => seconds + 1);
        }, 1000);
        intervalRef.current = interval;
        return () => clearInterval(intervalRef.current);
    }

    const formatTime = (secs) => {
        //Format time as m:s
        let hours = Math.floor(secs / 3600);
        let minutes = Math.floor(secs / 60) % 60;
        let seconds = secs % 60;
        return [hours, minutes, seconds]
            .map((v) => ('' + v).padStart(2, '0'))
            .filter((v, i) => v !== '00' || i > 0)
            .join(':');
    };

    const stopInterval = () => {
        clearInterval(intervalRef.current);
    }

    return (
        <TimerContext.Provider
            value={{
                seconds,
                formatTime,
                stopInterval,
                setMyInterval
            }}
        >
            {children}
        </TimerContext.Provider>
    );
}