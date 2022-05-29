import React from "react";

// creating context with default values for testing
export const GlobalContext = React.createContext({
    monthIndex:0,
    setMonthIndex: (index)=> {},
});
