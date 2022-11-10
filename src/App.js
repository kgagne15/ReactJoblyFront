import './App.css';
import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Routes from "./Routes";
import {BrowserRouter} from "react-router-dom";
import JoblyApi from './api';

function App() {

  // const [companies, setCompanies] = useState([]);

  // useEffect(() => {
  //   async function getAllCompanies() {
  //     let companiesRes = await JoblyApi.getAllCompanies();
  //     setCompanies(companiesRes);
  //   }
  //   getAllCompanies();
  // }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
