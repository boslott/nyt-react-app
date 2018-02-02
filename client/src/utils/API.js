import axios from "axios";
const BASEURL = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=';
const APIKEY = 'b44ad3524768458b8cb78f3c6ccc6e35';

export default {
  getArticles: function(topic, startYear, endYear) {
    console.log(topic, startYear, endYear);
    return axios.get(BASEURL + topic + '&api-key=' + APIKEY);
  },

  saveArticle: function(article) {
    console.log('Article data');
    console.log(article);
    return axios.post('/api/articles', article);
  },

  getSavedArticles: function() {
    return axios.get('/api/articles');
  },

  deleteArticle: function(id) {
    return axios.delete('/api/articles/' + id);
  }
}; 
