import React from 'react'
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Event from './pages/Event';

export default function Routes() {
    return (
        <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/login" exact component={Login} />          
          <Route path="/register" exact component={Register} />
          <Route path="/events" exact component={Event} />
        </Switch>
        </BrowserRouter>
    )
}
