import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

import AdminCard from './AdminCard';

const AdminsForReview = () => {
  const [admins, setAdmins] = useState([]);

  const getAdmins = () => {
    axiosWithAuth()
      .get('https://refugee-stories-api-082019.herokuapp.com/api/users/pending')
      .then((res) => {
        console.log(res);
        setAdmins(res.data);
      })
      .catch((error) => console.log(error.response));
  };

  useEffect(() => {
    getAdmins();
  }, []);

  const rejectAdmin = (id) => {
    axiosWithAuth()
      .delete(
        `https://refugee-stories-api-082019.herokuapp.com/api/users/${id}`
      )
      .then((res) => {
        console.log('DELETE', res);
        getAdmins(); // fetch admins to update list
      })
      .catch((error) => console.log(error.response));
  };

  const approveAdmin = (id) => {
    axiosWithAuth()
      .put(`https://refugee-stories-api-082019.herokuapp.com/api/users/${id}`)
      .then((res) => {
        console.log('APPROVE', res);
        getAdmins(); // fetch admins to update list
      })
      .catch((error) => console.log(error.response));
  };

  return (
    <div className="container">
      <h2>New Administrators For Your Review:</h2>
      <div className="pending-admins-display">
        {admins.length > 0 ? (
          admins.map((admin) => (
            <AdminCard
              key={admin.id}
              id={admin.id}
              firstName={admin.firstName}
              lastName={admin.lastName}
              email={admin.email}
              reject={rejectAdmin}
              approve={approveAdmin}
            />
          ))
        ) : (
          <p>There are no new admins for review at this time.</p>
        )}
      </div>
    </div>
  );
};

export default AdminsForReview;
