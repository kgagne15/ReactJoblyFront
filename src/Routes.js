import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Companies from "./Companies";
import CompanyDetail from "./CompanyDetail";
import Jobs from "./Jobs";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import PrivateRoute from "./PrivateRoute";


function Routes({signup, login}) {
    return (
        <Switch>
            <Route exact path="/"><Home /></Route>

            <PrivateRoute exact path="/companies">
                <Companies/>
            </PrivateRoute>

            <PrivateRoute exact path="/companies/:handle">
                <CompanyDetail/>
            </PrivateRoute>

            <PrivateRoute exact path="/jobs">
                <Jobs/>
            </PrivateRoute>

            <PrivateRoute exact path="/profile">
                <Profile/>
            </PrivateRoute>

            <Route exact path="/login"><Login login={login}/></Route>
            <Route exact path="/signup"><Signup signup={signup}/></Route>

        </Switch>
    );
}

export default Routes;


