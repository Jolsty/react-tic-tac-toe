import React, { createContext } from 'react';

export const AppContext = createContext();

/* eslint-disable-next-line react/prop-types */
export default function AppContextObj({ children, appData }) {
  return <AppContext.Provider value={appData}>{children}</AppContext.Provider>;
}
