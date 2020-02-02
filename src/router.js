import React from 'react';
import { Router as ReactRouter, Switch } from 'react-router-dom';
import loadable from '@loadable/component';


// const Private = loadable(() => import('views/private'));
// const AuthLayout = loadable(() => import('views/layouts/auth'));
// const Login = loadable(() => import('views/login'));



//
const Router = () => {
    return (
      <ReactRouter history={history}>

        <Switch>
          {/* Auth */}
          {/* <AuthLayout exact path="/login" componentPath={Login} /> */}
          {/* Main */}
          {/* <Private exact path="/" componentPath="home" /> */}
          {/* Base */}

          {/* <Private exact path="/asdasd" componentPath="asdasd" /> */}


          {/* Errors */}
          {/* <Private componentPath="errors/404" /> */}
        </Switch>
      </ReactRouter>
    );
  };
  
  export default Router;