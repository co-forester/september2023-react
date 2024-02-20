import {createContext, useState} from "react";

const Context =createContext(null);
const ContextProvider = ({children}) => {
    const state = useState()
    return (
        <Context.Provider value={state}>
            {children}
        </Context.Provider>
    );
};

export {ContextProvider, Context};