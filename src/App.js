import './App.css';
import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Routes from "./Routes";
import {BrowserRouter} from "react-router-dom";
import JoblyApi from './api';

export const TOKEN_STORAGE_ID = "jobly-token";

function App() {

  const [token, setToken] = useState(TOKEN_STORAGE_ID)

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
  //add getCurrentUser here, use createContext

  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes signup={signup}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
