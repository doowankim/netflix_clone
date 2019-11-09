import React from "react";
import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch
} from "react-router-dom";
import Home from "../Routes/Home"; //Home의 index를 먼저 불러오고, index가 container를 불러오고, container가 presenter를 불러온다
import Search from "../Routes/Search";
import TV from "../Routes/TV";
import Header from "./Header";

export default () => (
    <Router>
        <>
            <Header />
            <Switch>
                <Route path ="/" exact component={Home} />
                <Route path ="/tv" exact component={TV} />
                <Route path ="/search" exact component={Search} />
                <Redirect from ="*" to="/" />
            </Switch>
        </>
    </Router>
);
