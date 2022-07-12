import React, { useContext } from 'react'
import { createContext } from "react";

export const context = createContext({})
const { Provider } = context


export default ({ children, attrs }) => {
  const fromAbove = useContext(context)
  return <Provider value={{ ...fromAbove, ...attrs }}>{children}</Provider>
}
