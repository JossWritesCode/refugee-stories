import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import NavBar from '../layout/NavBar.js';
import Footer from '../layout/Footer.js';
import BackButton from '../layout/BackButton';
//material ui dependencies
import Button from '@material-ui/core/Button';
import BlockIcon from '@material-ui/icons/Block';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  reject: {
    backgroundColor: 'red',
    border: 0,
    borderRadius: 5,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: '2.4rem',
    padding: '0 20px',
    marginTop: '2rem',
    fontSize: '1.4rem',
    width: '13rem',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: 'darkred',
    },
  },
  approve: {
    backgroundColor: 'green',
    border: 0,
    borderRadius: 5,
    boxShadow: '0 3px 5px 2px rgba(136, 223, 145, .3)',
    color: 'white',
    height: '2.4rem',
    padding: '0 20px',
    marginTop: '2rem',
    fontSize: '1.4rem',
    width: '13rem',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: 'darkgreen',
    },
  },
}));

const AdminStoryView = (props) => {
  const classes = useStyles();

  const [story, setStory] = useState({});
  const id = props.match.params.id;

  const rejectStory = (id) => {
    axiosWithAuth()
      .delete(
        `https://refugee-stories-api-082019.herokuapp.com/api/stories/${id}`
      )
      .then((res) => {
        props.history.push('/dashboard');
      })
      .catch((error) => console.log(error.response));
  };

  const approveStory = (id) => {
    axiosWithAuth()
      .put(`https://refugee-stories-api-082019.herokuapp.com/api/stories/${id}`)
      .then((res) => {
        props.history.push('/dashboard');
      })
      .catch((error) => console.log(error.response));
  };

  useEffect(() => {
    const getStory = () => {
      axiosWithAuth()
        .get(
          `https://refugee-stories-api-082019.herokuapp.com/api/stories/${id}`
        )
        .then((res) => {
          setStory(res.data);
        })
        .catch((error) => console.log(error.response));
    };
    getStory();
  }, [id]);

  return (
    <div className="admin-story-view">
      <NavBar />
      <BackButton link="/dashboard" />
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
