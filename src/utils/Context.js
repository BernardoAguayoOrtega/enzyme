//import react
import React from 'react';

//create context and export it
export const Context = React.createContext();

// create context provider and export it
export const ContextProvider = ({ children }) => {
	return(
    <Context.Provider value={{number: 15}}>
      {children}
    </Context.Provider>
  )
};
