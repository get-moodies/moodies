import { createContext, useState, useContext } from 'react';

export const AuthContext = createContext();

export const ContextProvider = ({ children }) => {
  //const userToken = JSON.parse(localStorage.getItem('isLoggedIn'));
  const [token, setToken] = useState(null);
  const isLoggedIn = () => {return token ? true : false;}

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        isLoggedIn
      }}
    >
      { children }
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext (AuthContext)