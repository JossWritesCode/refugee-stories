import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@material-ui/core';
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
  root: {
    // width: '500px'
  }
});

export default function Story(props) {
  const classes = useStyles();

  return (
    <Card id="story" className={classes.root}>
      <Link to={`/story/${props.story.id}`}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={props.story.imageUrl}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.story.title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="secondary">
            Learn More
          </Button>
        </CardActions>
      </Link>
    </Card>
  );
}
