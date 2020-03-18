import React, { createContext, useReducer } from "react";
import { CardReducer } from "../Functions/CardReducer";

export const CardContext = createContext();

export const CardProvider = props => {
  const [{ newList }, dispatch] = useReducer(CardReducer, { newList: [] });

  return (
    <CardContext.Provider value={[newList, dispatch]}>
      {props.children}
    </CardContext.Provider>
  );
};
