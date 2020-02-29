import React from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import NavBar from './NavBar.js';
import Footer from './Footer.js';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

const StoryForm = () => {
  const classes = useStyles();
  return (
    <div className="form-container">
      <NavBar />
      <div className="form-text">
        <h1 className="h1">Share Your Story</h1>
        <p className="p story-text">
          Please share your story with us. After our admins have reviewed it, we
          will do our part to share it with the world.
        </p>
      </div>

      <Form className="signup-form">
        <label>Author</label>
        <Field
          className="field form-field"
          name="author"
          type="text"
          placeholder="Author"
        />
        <label>Country of Origin</label>
        <Field
          className="field form-field"
          name="country"
          type="text"
          placeholder="Country of Origin"
        />
        <label>Title</label>
        <Field
          className="form-field"
          name="title"
          type="text"
          placeholder="Title"
        />
        <label>Year</label>
        <Field
          className="form-field"
          name="year"
          type="number"
          placeholder="Year"
        />
        <label>Image</label>
        <Field
          className="form-field"
          name="imageUrl"
          type="text"
          placeholder="Image Url"
        />
        <label>Your Story</label>
        <Field
          className="story-form-field"
          component="textarea"
          name="story"
          type="text"
        />
        <button className="submit-button">Submit</button>
      </Form>
      <Footer />
    </div>
  );
};

const FormikStoryForm = withFormik({
  mapPropsToValues({ author, country, title, story, year, imageUrl }) {
    return {
      author: author || '',
      country: country || '',
      title: title || '',
      story: story || '',
      year: year || '',
      imageUrl: imageUrl || ''
    };
  },
  validationSchema: Yup.object().shape({
    author: Yup.string().required(),
    country: Yup.string().required(),
    title: Yup.string().required(),
    story: Yup.string().required(),
    year: Yup.number(),
    imageUrl: Yup.string()
  }),

  handleSubmit(values, { props, setStatus, resetForm }) {
    console.log(values);
    axios
      .post(
        'https://refugee-stories-api-082019.herokuapp.com/api/public',
        values
      )
      .then(res => {
        console.log(res.data);
        setStatus(res.data);
        props.history.push('/story-confirmation');
        resetForm();
      })
      .catch(error => console.log(error.response));
  }
})(StoryForm);

export default FormikStoryForm;
