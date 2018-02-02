import React, { Component } from 'react';
// import Card from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import API from '../../utils/API';

let imageThumb = require('../../images/JavaScript-logo.png');


class ResultsBox extends Component {

  saveArticle = () => {
    API.saveArticle({
      title: this.props.article.headline.main,
      pubDate: this.props.article.pub_date,
      url: this.props.article.web_url,
      snippet: this.props.article.snippet,
      img: imageThumb
    })
    .catch(err => console.log(err));
  };

  render() {

    if (this.props.article.multimedia[42] && this.props.article.multimedia[42].url) {
      imageThumb = 'http://nytimes.com/' + this.props.article.multimedia[42].url;
    }

    return (
    
      <Grid container className='d-flex justify-content-center my-4'>
        <Grid item xs={2}>
          <img src={imageThumb} alt={this.props.article.headline.main} className='px-3 mx-3' height='150' width='160'/>
        </Grid>
        <Grid item xs={8} >
          <a href={this.props.article.web_url} alt={this.props.article.headline.main} target='_blank'>
            <h2 className='m-3'>
              {this.props.article.headline.main}
            </h2>
          </a>
          <p className='m-3'>{this.props.article.snippet}</p>
        </Grid>
        <Grid item xs={2} className='d-flex align-items-center'>
          <Button size='large' raised className='submit' data-index={this.props.id} onClick={this.saveArticle}>
            <i className='fas fa-archive'></i>
            &nbsp; Save
          </Button>
        </Grid>
      </Grid>

    );
  }
}

export default ResultsBox;
