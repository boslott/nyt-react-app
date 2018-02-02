import React, { Component } from 'react';
import { Jumbotron } from '../components/Jumbotron/Jumbotron';
import Grid from 'material-ui/Grid';
import Card from 'material-ui/Card';
import { SavedArticlesBox } from '../components/SavedArticlesBox/SavedArticlesBox';
import API from '../utils/API';

class SavedArticles extends Component {
  state = {
    articles: []
  }

  componentDidMount() {
    API.getSavedArticles()
      .then(articles => {
        this.setState({
          articles: articles.data
        });
      })
      .catch(err => console.log(err));
  }

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(articles => {
        this.setState({
          articles: articles.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className='container'>
        <Jumbotron />
        {this.state.articles.length ? (
              <Grid container spacing={24} className='d-flex justify-content-center'>
                <Grid item xs={11}>
                  <Card className='my-4'>
                    <Grid container spacing={24}>
                      <Grid container className='d-flex justify-content-center'>
                        <Grid item xs={8} className='ml-5'>
                          <h2 className='text-center'>Saved Articles</h2>
                          <hr />
                        </Grid>
                      </Grid>
                      {this.state.articles.map(article => {
                        return (
                          <SavedArticlesBox key={this.state.articles.indexOf(article)} article={article} id={this.state.articles.indexOf(article)} delete={this.deleteArticle} />
                        )
                      })}
                    </Grid>
                  </Card>
                </Grid>
              </Grid>
        ) : (
          <h3>No Saved Articles To Display</h3>
        )}

      </div>
    );
  }
}

export default SavedArticles;