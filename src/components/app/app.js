import React from "react";
import { Switch, Route } from "react-router-dom";

import "./app.css";

import AppHeader from "../app-header";
import AppFooter from "../app-footer";
import { HomePage, CartPage, BookDetailsPage, PageNotFound } from "../pages";

const App = () => {

    return (
        <div className="container">
            <AppHeader />
            <div className="page-content">
                <Switch>
                    <Route path="/" component={HomePage} exact></Route>
                    <Route path="/cart" component={CartPage}></Route>
                    <Route path="/book/:id" component={BookDetailsPage}></Route>
                    <Route component={PageNotFound}></Route>
                </Switch>
            </div>
            <AppFooter />
        </div>
    );
};

export default App;