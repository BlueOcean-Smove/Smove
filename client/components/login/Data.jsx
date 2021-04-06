import React, { useState, createContext } from 'react';

const UserDataContext = createContext();

const UserDataContextProvider = ({children}) => {
  const [userData, setUserData] = useState({});
  return (
    <UserDataContext.Provider value={{ userData, setUserData }} >
      {children}
    </UserDataContext.Provider>
  );
};

export { UserDataContext, UserDataContextProvider }