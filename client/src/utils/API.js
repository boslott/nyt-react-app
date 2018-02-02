import axios from "axios";
import moment from 'moment';
const BASEURL = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=';
const APIKEY = 'b44ad3524768458b8cb78f3c6ccc6e35';


export default {
  getArticles: function(topic, startDate, endDate) {
    let queryURL = BASEURL;
    if (topic !== 'Invalid') queryURL += topic;
    if (moment(startDate).isValid()) queryURL += '&begin_date=' + startDate;
    if (moment(endDate).isValid()) queryURL += '&end_date=' + endDate;
    queryURL += '&api-key=' + APIKEY;
    return axios.get(queryURL);
  },

  saveArticle: function(article) {
    return axios.post('/api/articles', article);
  },

  getSavedArticles: function() {
    return axios.get('/api/articles');
  },

  deleteArticle: function(id) {
    return axios.delete('/api/articles/' + id);
  }
}; 
