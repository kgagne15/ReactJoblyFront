import './App.css';
import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Routes from "./Routes";
import {BrowserRouter} from "react-router-dom";
import JoblyApi from './api';
import jwt from "jsonwebtoken";
import UserContext from './UserContext';

export const TOKEN_STORAGE_ID = "jobly-token";

function App() {

  const [token, setToken] = useState(TOKEN_STORAGE_ID)
  const [currentUser, setCurrentUser] = useState(null);

  console.log(token, 'TOKEN')

  //add signup function here, pass through routes
  async function signup(signupData) {
    try {
      let token = await JoblyApi.signup(signupData);
      setToken(token);
      return {success: true};
    } catch (errors) {
      console.error("signup failed", errors);
      return { success: false, errors}
    }
  }

  //add login function here, pass through routes
  async function login(loginData) {
    try {
      let token = await JoblyApi.login(loginData);
      setToken(token);
      return {success: true}
    } catch(errors) {
      console.error("login failed", errors);
      return {success: false, errors}
    }
  }

  //add getCurrentUser here, use createContext

  useEffect(function loadUserInfo() {
    async function getCurrentUser() {
      if (token) {
        try {
          let { username } = jwt.decode(token);
          JoblyApi.token = token;
          let currentUser = await JoblyApi.getCurrentUser(username);
          setCurrentUser(currentUser);
        } catch (e) {
          console.error("App loadUserInfo: problem loading", e);
          setCurrentUser(null);
        }
      }
    }
    getCurrentUser();

  }, [token])
  

  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  return (
    <div className="App">
      <BrowserRouter>
      <UserContext.Provider 
        value={{currentUser, setCurrentUser }}>
        <Nav logout={logout}/>
        <Routes login={login} signup={signup}/>
      </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
