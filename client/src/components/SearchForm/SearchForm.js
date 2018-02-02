import React, { Component } from 'react';
import './SearchForm.css';
import Grid from 'material-ui/Grid';
import Card from 'material-ui/Card';
import Input, { InputLabel } from 'material-ui/Input';
// import { FormControl } from 'material-ui/Form';
import Button from 'material-ui/Button';
import API from '../../utils/API';
import moment from 'moment';

class SearchForm extends Component {

  state = {
    topic: '',
    startDate: '',
    endDate: ''
  };

  

  getArticles = (topic, startDate, endDate) => {
    API.getArticles(topic, startDate, endDate)
      .then(result => {
        this.props.callback(result.data.response.docs);
      })
      .catch(err => console.log(err));
   }

  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  }

  // When the form is submitted, prevent the default event and alert the username and password
  handleFormSubmit = event => { 
    event.preventDefault();
    let formatedStartDate = moment(this.state.startDate).format('YYYYMMDD');
    let formatedEndDate = moment(this.state.endDate).format('YYYYMMDD');
    this.getArticles(this.state.topic, formatedStartDate, formatedEndDate);
    this.setState({ topic: '', startDate: '', endDate: '' });
  }


  render() {
    return (
      <Grid container className='d-flex justify-content-center mb-5'>
        <Grid item xs={11}>
          <Card>
            <form>
              <Grid container spacing={24}>
                <Grid container className='d-flex justify-content-center'>
                  <Grid item xs={10} className='ml-5'>
                    <h2 className='text-center'>Search</h2>
                    <hr />
                  </Grid>
                </Grid>
                <Grid container className='d-flex justify-content-center'>
                  <Grid item xs={10} className='ml-5'>
                    {/* <FormControl> */}
                      <InputLabel>Topic</InputLabel>
                      <Input
                        fullWidth={true}
                        type='text'
                        name='topic'
                        value={this.state.topic}
                        onChange={this.handleInputChange}
                      />
                    {/* </FormControl> */}
                  </Grid>
                </Grid>
                <Grid container className='d-flex justify-content-center mt-4 pl-4'>
                  <Grid item xs={5} className='ml-5'>
                    {/* <FormControl> */}
                      <InputLabel className='mr-5'>Start Date</InputLabel>
                      <Input
                        type='date'
                        name='startDate'
                        value={this.state.startDate}
                        onChange={this.handleInputChange}
                      />
                    {/* </FormControl> */}
                  </Grid>
                {/* </Grid> */}
                {/* <Grid container className='d-flex justify-content-center'> */}
                  <Grid item xs={5} className='ml-5'>
                    {/* <FormControl> */}
                      <InputLabel className='mr-5'>End Date</InputLabel>
                      <Input
                        type='date'
                        name='endDate'
                        value={this.state.endDate}
                        onChange={this.handleInputChange}
                      />
                    {/* </FormControl> */}
                  </Grid>
                </Grid> 
                <Grid container className='d-flex justify-content-center'>
                  <Grid item xs={10}>
                    <Button raised size='large' className='submit btn-block my-4' onClick={this.handleFormSubmit}>
                      Submit &nbsp;
                      <i className='fas fa-arrow-right text-white'></i>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

export default SearchForm;
