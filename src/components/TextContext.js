import React from 'react'
import { createContext } from "react";

export const context = createContext({})
const { Provider } = context


export default ({ children, attrs }) => <Provider value={attrs}>{children}</Provider> 
