import React from 'react';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

export const SavedArticlesBox = (props) => (
  <Grid container className='d-flex justify-content-center my-4'>
    <Grid item xs={2}>
      <img src={props.article.img} alt={props.article.title} className='px-3 mx-3' height='150' width='160'/>
    </Grid>
    <Grid item xs={8}>
      <a href={props.article.url} alt={props.article.title} target='_blank'>
        <h2 className='m-3'>
          {props.article.title}
        </h2>
      </a>
      <p className='m-3'>{props.article.snippet}</p>
    </Grid>
    <Grid item xs={2} className='d-flex align-items-center'>
      <Button onClick={() => props.delete(props.article._id)}>
        <i className='far fa-window-close fa-3x text-danger'></i>
      </Button>
    </Grid>
  </Grid>
);