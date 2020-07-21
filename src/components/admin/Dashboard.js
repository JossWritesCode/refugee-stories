import React from 'react';

import AdminsForReview from './AdminsForReview';
import StoriesForReview from './StoriesForReview';
import NavBar from '../layout/NavBar';
import Footer from '../layout/Footer';
// import AdminSignOut from '../AdminSignOut';

const Dashboard = (props) => {
  return (
    <div className="dashboard-container">
      {/* <AdminSignOut {...props} /> */}
      <div className="head">
        <NavBar />
      </div>
      {/* <a className="sign-out-button" onClick={signOut}>
        Sign Out
      </a> */}
      <main className="main-dashboard">
        <AdminsForReview />
        <StoriesForReview />
      </main>
      <div className="foot">
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
