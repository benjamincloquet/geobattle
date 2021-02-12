import React from 'react';
import UserRoute from '../routes/UserRoute';
import Launcher from './Launcher';
import LoginPrompt from './LoginPrompt';
import './Home.scss';

const Home = () => (
  <section className="home">
    <h1 className="home__title">Welcome on GeoBattle !</h1>
    <UserRoute component={Launcher} fallback={LoginPrompt} />
  </section>
);

export default Home;
