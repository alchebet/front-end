import React, { createContext, useState, useContext } from 'react';

const AlchebetContext = createContext();

export const AlchebetProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const handleSetUser = (user) => {
    setUser(user);
    console.log(user);
  }

  return (
    <AlchebetContext.Provider 
    value= {{ user, handleSetUser }}
    >
      {children}
    </AlchebetContext.Provider>
  )
}

export const useProvider = () => {
  const context = useContext(AlchebetContext);
  return context;
};

export const useUser = () => {
  const { user } = useContext(AlchebetContext);
  return user;
}

export const useHandleSetUser= () => {
  const { handleSetUser } = useContext(AlchebetContext);
  return handleSetUser;
}
