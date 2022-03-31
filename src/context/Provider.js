import React, { createContext, useReducer } from "react"
import { useAuth } from "./actions/authAction"
import { useClass } from "./actions/classAction"
import initAuth from "./initialstates/initAuth"
import initClass from "./initialstates/initClass"
import authReducer from "./reducers/authReducer"
import classReducer from "./reducers/classReducer"

export const GlobalContext = createContext({})

export const Provider = ({ children }) => {
    const [classState, classDispatch] = useReducer(classReducer, initClass)
    const [authState, authDispatch] = useReducer(authReducer, initAuth)

    const store = {
        authState,
        classState,
        auth: useAuth(authDispatch),
        mclass: useClass(classDispatch),
    }

    return (
        <GlobalContext.Provider
            value={ store } >
            { children }
        </GlobalContext.Provider>
    )
}