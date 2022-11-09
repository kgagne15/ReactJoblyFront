import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Companies from "./Companies";

function WebRoutes() {
    return (
        <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/companies"><Companies /></Route>
        </Switch>
    );
}

export default WebRoutes;


