import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.scss';

const Home = () => (
  <section className="home">
    <h1 className="home__title">Welcome on GeoBattle !</h1>
    <div className="play">
      <Link to="/play">Play now</Link>
    </div>
  </section>
);

export default Home;
