import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  backButton: {
    position: 'absolute',
    top: '15%',
    left: '8%',
    fontFamily: 'Prata',
    fontSize: '2.4rem',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
}));

function BackButton(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Link className={classes.backButton} to={props.link}>
        &#8592;
      </Link>
    </React.Fragment>
  );
}

export default BackButton;
