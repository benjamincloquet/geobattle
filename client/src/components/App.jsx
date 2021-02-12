import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import UserRoute from './routes/UserRoute';
import LinkedUserRoute from './routes/LinkedUserRoute';
import Nav from './nav/Nav';
import HomePage from './home/HomePage';
import LoginPage from './login/LoginPage';
import PlayPage from './play/PlayPage';
import DashboardPage from './dashboard/DashboardPage';
import useFetchUser from '../useFetchUser';
import './App.css';

const App = () => {
  useFetchUser();

  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <UserRoute path="/play">
          <LinkedUserRoute path="/play">
            <PlayPage />
          </LinkedUserRoute>
        </UserRoute>
        <UserRoute path="/dashboard">
          <DashboardPage />
        </UserRoute>
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
};

export default App;
