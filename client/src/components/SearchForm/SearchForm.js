import React, { Component } from 'react';
import './SearchForm.css';
import Grid from 'material-ui/Grid';
import Card from 'material-ui/Card';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Button from 'material-ui/Button';

class SearchForm extends Component {
  state = {
    topic: '',
    startYear: '',
    endYear: '',
    justify: 'center'
  };

  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, prevent the default event and alert the username and password
  handleFormSubmit = event => { 
    event.preventDefault();
    console.log(this.state);
    // alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
    this.setState({ topic: '', startYear: '', endYear: '' });
  };

  render() {
    return (
      <Grid container justify={this.state.justify}>
        <Grid item xs={10}>
          <Card>
            <form>
              <Grid container spacing={24}>
                <Grid container justify={this.state.justify}>
                  <Grid item xs={10} className='ml-5'>
                    <FormControl>
                      <InputLabel>Topic</InputLabel>
                      <Input
                        type='text'
                        name='topic'
                        value={this.state.topic}
                        onChange={this.handleInputChange}
                      />
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container justify={this.state.justify}>
                  <Grid item xs={10} className='ml-5'>
                    <FormControl>
                      <InputLabel>Start Year</InputLabel>
                      <Input
                        type='text'
                        name='startYear'
                        value={this.state.startYear}
                        onChange={this.handleInputChange}
                      />
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container justify={this.state.justify}>
                  <Grid item xs={10} className='ml-5'>
                    <FormControl>
                      <InputLabel>End Year</InputLabel>
                      <Input
                        type='text'
                        name='endYear'
                        value={this.state.endYear}
                        onChange={this.handleInputChange}
                      />
                    </FormControl>
                  </Grid>
                </Grid> 
                <Grid container justify={this.state.justify}>
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
