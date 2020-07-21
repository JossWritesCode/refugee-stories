import React, { useEffect } from 'react';
import { getStory } from '../../actions';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import NavBar from '../layout/NavBar.js';
import Footer from '../layout/Footer.js';
import BackButton from '../layout/BackButton';
import Loader from 'react-loader-spinner';
import { Typography } from '@material-ui/core';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import DeleteIcon from '@material-ui/icons/Delete';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  headerSecondary: {
    fontSize: '2.4rem',
    width: '50%',
    fontFamily: 'Prata',
    textAlign: 'center',
    minWidth: '30rem',
  },
  headerPrimary: {
    fontFamily: 'Prata',
    fontSize: '8rem',
    textAlign: 'center',
  },
  storyText: {
    fontSize: '1.6rem',
    margin: '2rem',
  },
  backButton: {
    position: 'absolute',
    top: '20%',
    left: '20%',
    fontFamily: 'Prata',
    fontSize: '2.4rem',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
  delete: {
    fill: 'red',
    fontSize: '5.2rem',
    position: 'absolute',
    top: '65%',
    left: '10%',
    cursor: 'pointer',
    '&:hover': {
      fill: 'darkred',
    },
  },
}));

function StoryRoute({ storyData, getStory, match, adminData, history }) {
  const classes = useStyles();

  const id = match.params.id;

  let isAdmin = adminData.isAdmin;
  useEffect(() => {
    getStory(id);
  }, [getStory, isAdmin, id]);

  const deleteStory = () => {
    axiosWithAuth()
      .delete(
        `https://refugee-stories-api-082019.herokuapp.com/api/stories/${id}`
      )
      .then((res) => {
        console.log('DELETE', res);
        history.push('/');
      })
      .catch((error) => console.log(error.response));
  };

  return (
    <div>
      <NavBar />
      <BackButton link="/stories" />
      <div className="story-container">
        {storyData.isLoading ? (
          <Loader
            timeout={5000}
            type="Rings"
            color="#C96567"
            height={100}
            width={100}
          />
        ) : (
          ''
        )}
        <Typography
          className={classes.headerSecondary}
          variant="h3"
          component="h3"
        >
          {storyData.story.title}
        </Typography>

        <img
          className="story-picture"
          src={storyData.story.imageUrl}
          alt="author"
        />
        <Typography
          variant="h6"
          component="h6"
          className={classes.headerSecondary}
        >
          by {storyData.story.author}
        </Typography>
        <Typography className={classes.storyText}>
          {storyData.story.story}
        </Typography>
      </div>

      {isAdmin ? (
        <button onClick={() => deleteStory()}>
          <DeleteIcon className={classes.delete} />
        </button>
      ) : null}
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    storyData: state.storyData,
    adminData: state.adminData,
  };
};
export default connect(mapStateToProps, { getStory })(StoryRoute);
