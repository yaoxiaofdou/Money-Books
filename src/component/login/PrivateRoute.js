import React, { Component } from 'react';

import {
  Route,
  Redirect,
} from 'react-router-dom'

import loginService from '../../services/loginService.js';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    loginService.getLoginState().isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)
export default PrivateRoute;