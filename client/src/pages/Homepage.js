 import React, { Component } from 'react';
 import { Jumbotron } from '../components/Jumbotron/Jumbotron';
 import SearchForm from '../components/SearchForm/SearchForm';
 import ResultsBox from '../components/ResultsBox/ResultsBox';
 import Grid from 'material-ui/Grid';
 import Card from 'material-ui/Card';
//  import API from '../utils/API';

class Homepage extends Component {
   state = {
     articles: []
   };

   setArticles = articles => {
     console.log(articles)
     this.setState({
       articles: articles
     });
   };

  //  saveArticle = article => {
  //   console.log(article);
  //  };


  render() {
    return (
      <div className='container'>
        <Jumbotron />
        <SearchForm callback={this.setArticles} />
        {this.state.articles.length ? (
              <Grid container spacing={24} className='d-flex justify-content-center'>
                <Grid item xs={11}>
                  <Card className='my-4'>
                    <Grid container spacing={24}>
                      <Grid container className='d-flex justify-content-center'>
                        <Grid item xs={8} className='ml-5'>
                          <h2 className='text-center'>Results</h2>
                          <hr />
                        </Grid>
                      </Grid>
                      {this.state.articles.map(article => {
                        return (
                          <ResultsBox key={this.state.articles.indexOf(article)} article={article} id={this.state.articles.indexOf(article)} callback={this.saveArticle} />
                        )
                      })}
                    </Grid>
                  </Card>
                </Grid>
              </Grid>
        ) : (
          <h3>No Results To Display</h3>
        )}
        
      </div>
    );
  }
}

export default Homepage;