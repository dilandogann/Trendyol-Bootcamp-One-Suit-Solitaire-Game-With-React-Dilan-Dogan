import React, { createContext, useState } from 'react';

export const GameFinishedContext = createContext();

export const GameFinishedContextProvider = ({ children }) => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <GameFinishedContext.Provider
            value={{
                open,
                handleOpen,
                setOpen,
                handleClose
            }}
        >
            {children}
        </GameFinishedContext.Provider>
    );
}