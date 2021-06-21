import './App.css';
import React from 'react';
import { Container } from 'reactstrap'
import Routes from './routes';

function App() {
  return (
    <Container>
    <h1>Hello Hemant</h1>
    <div className="content">
    <Routes />
    </div>
    </Container>
  );
}

export default App;
