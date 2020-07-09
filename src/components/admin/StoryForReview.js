import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Container,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100vw',
    margin: '0',
    padding: '0',
    minHeight: '100vh',
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
          color="secondary"
          className={classes.submit}
        >
          Review Story
        </Button>
      </Link>
    </Container>
  );
};

export default StoryCard;
