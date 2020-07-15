import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import NavBar from '../NavBar.js';
import Footer from '../Footer.js';

//material ui dependencies
import Button from '@material-ui/core/Button';
import BlockIcon from '@material-ui/icons/Block';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  reject: {
    backgroundColor: 'red',
    '&:hover': {
      backgroundColor: 'darkred',
    },
    border: 0,
    borderRadius: 5,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 50px',
    marginTop: '2rem',
    fontSize: 17,
    width: '19rem',
    // padding: theme.spacing(3),
  },
  approve: {
    backgroundColor: 'green',
    '&:hover': {
      backgroundColor: 'darkgreen',
    },
    width: '19rem',
    border: 0,
    borderRadius: 5,
    boxShadow: '0 3px 5px 2px rgba(136, 223, 145, .3)',
    color: 'white',
    height: 48,
    padding: '0 50px',

    marginTop: '2rem',
    fontSize: 17,
    // padding: theme.spacing(3),
  },
}));

const AdminStoryView = (props) => {
  //console.log(props);

  const classes = useStyles();

  const [story, setStory] = useState({});
  const id = props.match.params.id;

  const rejectStory = (id) => {
    axiosWithAuth()
      .delete(
        `https://refugee-stories-api-082019.herokuapp.com/api/stories/${id}`
      )
      .then((res) => {
        //console.log('DELETE', res);
        props.history.push('/dashboard');
      })
      .catch((error) => console.log(error.response));
  };

  const approveStory = (id) => {
    axiosWithAuth()
      .put(`https://refugee-stories-api-082019.herokuapp.com/api/stories/${id}`)
      .then((res) => {
        //console.log('APPROVE', res);
        props.history.push('/dashboard');
      })
      .catch((error) => console.log(error.response));
  };

  const getStory = () => {
    axiosWithAuth()
      .get(`https://refugee-stories-api-082019.herokuapp.com/api/stories/${id}`)
      .then((res) => {
        //console.log('ADMIN REQUEST', res);
        setStory(res.data);
      })
      .catch((error) => console.log(error.response));
  };

  useEffect(() => {
    getStory();
  }, [getStory]);

  return (
    <div className="admin-story-view">
      <NavBar />
      <div className="story-card">
        <h4>{story.title}</h4>
        <img
          className="story-image"
          width="300px"
          alt="author"
          src={story.imageUrl}
        />
        <p className="p">by {story.author}</p>
        <p className="p story-text">{story.story}</p>
        <Button
          onClick={() => approveStory(id)}
          variant="contained"
          color="primary"
          className={classes.approve}
        >
          Approve
          <CheckBoxIcon className={classes.rightIcon} />
        </Button>
        <Button
          onClick={() => rejectStory(id)}
          variant="contained"
          color="primary"
          className={classes.reject}
        >
          Reject
          <BlockIcon className={classes.rightIcon} />
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default AdminStoryView;
