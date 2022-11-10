import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Companies from "./Companies";
import CompanyDetail from "./CompanyDetail";
import Jobs from "./Jobs";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";


function Routes({signup, login}) {
    return (
        <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/companies"><Companies/></Route>
            <Route exact path="/companies/:handle"><CompanyDetail/></Route>
            <Route exact path="/jobs"><Jobs/></Route>
            <Route exact path="/login"><Login login={login}/></Route>
            <Route exact path="/signup"><Signup signup={signup}/></Route>
            <Route exact path="/profile/:id"><Profile/></Route>
        </Switch>
    );
}

export default Routes;


