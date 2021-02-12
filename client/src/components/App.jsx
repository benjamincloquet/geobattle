import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Nav from './nav/Nav';
import Home from './home/Home';
import useFetchUser from '../useFetchUser';
import './App.css';

const App = () => {
  useFetchUser();

  return (
    <Router>
      <Nav />
      <Route exact path="/" component={Home} />
    </Router>
  );
};

export default App;
