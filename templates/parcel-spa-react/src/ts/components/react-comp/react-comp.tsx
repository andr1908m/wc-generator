import React from "react";
import ReactDOM from "react-dom";
import {
    LitElement, html, customElement, property
} from 'lit-element';
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
import toLitComponent from '../../toLitComponent';

const ReactComponent = () => {
    return <div>From React: Works!
        <div>
            <BrowserRouter>
                <Link to="/about">
                    about
                </Link>
                <Link to="/users">
                    users
                </Link>
                <Link to="/">
                    home
                </Link>
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
            </BrowserRouter>
        </div>
    </div>
}

toLitComponent(<ReactComponent/>, 'react-comp');

export default ReactComponent