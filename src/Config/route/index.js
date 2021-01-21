import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Base from "../../Pages/Base";

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Base/>
                </Route>
                <Route path="/:id">
                    <Base/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
