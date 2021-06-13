import './App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import React from 'react';
import { Container } from 'reactstrap'


function App() {
  return (
    <Container>
    <h1>Hello Hemant</h1>
    <Login />
    <Dashboard />
    </Container>
  );
}

export default App;
