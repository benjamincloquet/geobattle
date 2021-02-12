import React from 'react';
import LinkAccount from '../link-account/LinkAccount';
import { useUser } from '../../userContext';

const Dashboard = () => {
  const { user } = useUser();

  const renderDashboard = () => (
    <>
      <h1>Dashboard</h1>
      {user.geoGuessrAccountId ? null : <LinkAccount />}
    </>
  );

  return (
    <section className="dashboard-page">
      {user ? renderDashboard() : <p>Loading ...</p>}
    </section>
  );
};

export default Dashboard;
