// @packages
import React, { createContext, useReducer } from 'react';

// @scripts
import { config } from '../../../resources';

// @types
export const mainPageActions = {
    SIMPLE_STATE: 'SIMPLE_STATE'
};

// @constants
const MainPageContext = createContext(undefined);
const MainPageDispatchContext = createContext(undefined);

const mainPageReducer = (state, action) => {
    switch (action.type) {
        case mainPageActions.SIMPLE_STATE:
            return action.payload;
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

export const MainPageProvider = ({ children }) => {
    const [state, dispatch] = useReducer(
        mainPageReducer,
        config.initialState.menu
    );

    return (
        <MainPageContext.Provider value={state}>
            <MainPageDispatchContext.Provider value={dispatch}>
                {children}
            </MainPageDispatchContext.Provider>
        </MainPageContext.Provider>
    );
};

export const useMainPageContext = () => {
    const context = React.useContext(MainPageContext);

    if (!context) {
        throw new Error(
            'useMainPageContext must be used within a MainPageProvider'
        );
    }

    return context;
};

export const useMainPageDispatch = () => {
    const context = React.useContext(MainPageDispatchContext);

    if (!context) {
        throw new Error(
            'useMainPageDispatch must be used within a MainPageProvider'
        );
    }

    return context;
};

export const useMainPage = () => [
    useMainPageContext(),
    useMainPageDispatch()
];