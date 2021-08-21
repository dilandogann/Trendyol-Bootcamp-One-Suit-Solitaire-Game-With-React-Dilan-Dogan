import React, { createContext, useState} from 'react';

export const CommonErrorContext = createContext();

export const CommonErrorContextProvider = ({ children }) => {

    const [commonError, setCommonError] = useState({ show: false, message: "" });

    const updateError = (error) => {
        const errorObj = { show: error.show, message: error.message }
        setCommonError(errorObj);
    }
    return (
        <CommonErrorContext.Provider
            value={{
                commonError,
                updateError,
            }}
        >
            {children}
        </CommonErrorContext.Provider>
    );
}