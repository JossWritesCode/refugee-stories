import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import { Button, CssBaseline, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100vw',
    margin: '0',
    padding: '0',
    minHeight: '100vh',
    textTransform: 'none',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '28.8rem',
    margin: '0 auto',
    minHeight: '75vh',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: 'white',
    border: 0,
    borderRadius: 5,
    boxShadow: '0 3px 5px 2px rgba(136, 223, 145, .3)',
    height: '2.4rem',
    padding: '0 20px',
    marginRight: '2rem',
    marginTop: '2rem',
    fontSize: '1.4rem',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#01021a',
    },
  },
}));

const StoryCard = (props) => {
  const classes = useStyles();
  return (
    <Container className={classes.root} component="main" maxWidth="md">
      <CssBaseline />
      <h3>{props.title}</h3>
      <img alt="author" src={props.image} />
      <Link to={`dashboard/story/${props.id}`}>
        <Button
          type="submit"
          width="100px"
          variant="contained"
          className={classes.submit}
          color="primary"
        >
          Review Story
        </Button>
      </Link>
    </Container>
  );
};

export default StoryCard;
