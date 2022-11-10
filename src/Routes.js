import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Companies from "./Companies";
import CompanyList from "./CompanyList";
import Jobs from "./Jobs";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";

function Routes({companies}) {
    return (
        <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/companies"><Companies companies={companies} /></Route>
            <Route exact path="/companies/:handle"><CompanyList/></Route>
            <Route exact path="/jobs"><Jobs/></Route>
            <Route exact path="/login"><Login/></Route>
            <Route exact path="/signup"><Signup/></Route>
            <Route exact path="/profile/:id"><Profile/></Route>
        </Switch>
    );
}

export default Routes;


