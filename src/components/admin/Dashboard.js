import React from 'react';

import AdminsForReview from './AdminsForReview';
import StoriesForReview from './StoriesForReview';
import NavBar from '../NavBar';
import Footer from '../Footer';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="head">
        <NavBar />
      </div>
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
