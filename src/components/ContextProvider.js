import { createContext, useState, useContext } from 'react';

export const AuthContext = createContext();

export const ContextProvider = ({ children }) => {
  //const userToken = JSON.parse(localStorage.getItem('isLoggedIn'));
  const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')) || null);
  const [currentUserName, setCurrentUserName] = useState(JSON.parse(localStorage.getItem('userName')) || null);

  const isLoggedIn = () => {return token ? true : false;}
  const getUserName = () => {return currentUserName }

  

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        isLoggedIn,
        currentUserName,
        setCurrentUserName,
        getUserName
      }}
    >
      { children }
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext (AuthContext)