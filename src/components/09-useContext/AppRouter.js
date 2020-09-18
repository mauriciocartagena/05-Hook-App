import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect
} from "react-router-dom";

import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { AboutScreen } from './AboutScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
    return (
        <Router>
            <div>
            <NavBar />

            <div className="container" >

                <Switch>

                    <Route   exact path="/"      component={ HomeScreen } />
                    <Route   exact path="/login" component={ LoginScreen } />
                    <Route   exact path="/about" component={ AboutScreen } />

                    {/* ruta por defecto no encontro no */}
                    <Redirect to="/"/>
                    {/* <Route   component={ HomeScreen }/> */}

                </Switch>

            </div>


            </div>
        </Router>
    );
}
