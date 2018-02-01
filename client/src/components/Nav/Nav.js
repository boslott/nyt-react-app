import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';

export const Nav = () => (
  <Grid container spacing={24}>
    <Grid item xs={12}>
      <AppBar position='static' className='bg-dark'>
        <nav className='navbar navbar-expand-lg navbar-light bg-dark ml-5'>
          <Link className='navbar-brand text-white mr-5' to='/'>
            <i className='far fa-newspaper text-white'></i>
            &nbsp; NYT Scrubber &nbsp;
          </Link>
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle Navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link className={'nav-link ' + (window.location.pathname.endsWith('/') ? 'nav__active' : 'nav__inactive')} to='/'>
                  <i className='fas fa-home text-white'></i>
                  <span className='text-white'>&nbsp; Home &nbsp;</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link className={'nav-link ' + (window.location.pathname.endsWith('saved-articles') ? 'nav__active' : 'nav__inactive')} to='/saved-articles'>
                  <i className='fas fa-archive text-white'></i>
                  <span className='text-white'>&nbsp; Saved Articles &nbsp;</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </AppBar>
    </Grid>
  </Grid>
);