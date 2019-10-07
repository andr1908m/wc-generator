import React from "react";
import ReactDOM from "react-dom";
import {
    LitElement, html, customElement, property
} from 'lit-element';
import { HashRouter as Router, Route, Link,Switch } from "react-router-dom";
import toLitComponent from '../../toLitComponent';

const ReactComponent = () => {
    return <div>From React: Works!
        <div>
            <Router>
                <Link to="/about">
                    about
                </Link>
                <Link to="/users">
                    users
                </Link>
                <Link to="/">
                    home
                </Link>
                <a href="/bigroute.html">big route</a>
                <Switch>
                    <Route path="/about">
                        <div>about</div>
                    </Route>
                    <Route path="/users">
                        <div>users</div>
                    </Route>
                    <Route path="/">
                        <div>home</div>
                    </Route>
                </Switch>
            </Router>
        </div>
    </div>
}

toLitComponent(<ReactComponent/>, 'react-comp');

export default ReactComponent