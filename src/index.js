import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AppDrawer from './components/drawer/index.js';






const hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
      <AppDrawer />
      <Switch>
        <Route path="/" component={App} />
        <Redirect from="/" to="" />
      </Switch>
    </Router>,
    document.getElementById("root")
  );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
