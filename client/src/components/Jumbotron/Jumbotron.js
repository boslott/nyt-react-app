import React from 'react';
import './Jumbotron.css';

export const Jumbotron = () => (
  <div className='overlay-root mt-5'>
    <div className='jumbotron overlay'>
      <div className='jumbotron__text'>
        <h1 className='text-white text-center font-weight-bold'>NYT News Scrubber</h1>
        <h2 className='text-white text-center'>Search For and Save Articles on Topics of Your Interests</h2>
      </div>
    </div>
  </div>
);