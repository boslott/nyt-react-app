 import React from 'react';
 import { Jumbotron } from '../components/Jumbotron/Jumbotron';
 import SearchForm from '../components/SearchForm/SearchForm';

 export const Homepage = () => (
   <div className='container'>
    <Jumbotron />
    <SearchForm />
  </div>
 );