import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

import AdminCard from './AdminCard';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const AdminsForReview = () => {
  const [admins, setAdmins] = useState([]);

  const getAdmins = () => {
    axiosWithAuth()
      .get('https://refugee-stories-api-082019.herokuapp.com/api/users/pending')
      .then((res) => {
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
        getAdmins(); // fetch admins to update list
      })
      .catch((error) => console.log(error.response));
  };

  const approveAdmin = (id) => {
    axiosWithAuth()
      .put(`https://refugee-stories-api-082019.herokuapp.com/api/users/${id}`)
      .then((res) => {
        getAdmins(); // fetch admins to update list
      })
      .catch((error) => console.log(error.response));
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    heroimage: {
      width: '60rem',
      padding: '0',
      margin: '2rem',
    },
    headerSecondary: {
      fontSize: '1.4rem',
      width: '100%',
      paddingTop: '1rem',
      fontFamily: 'Prata',
      [theme.breakpoints.up('md')]: {
        fontSize: '1.6rem',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '1.8rem',
      },
    },

    headerPrimary: {
      fontFamily: 'Prata',
      fontSize: '4rem',
      paddingTop: '1rem',
      [theme.breakpoints.up('md')]: {
        fontSize: '6rem',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '8rem',
      },
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <Typography component="h2" className={classes.headerSecondary}>
        New Administrators for Review
      </Typography>
      <div>
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
