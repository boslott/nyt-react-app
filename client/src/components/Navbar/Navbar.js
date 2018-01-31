import React from 'react';
import { Link } from 'react-router-dom';


export const Navbar = () => (
  <div className='container-fluid bg-light fixed-top'>
    <div className='container'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link className='navbar-brand' to='/'>
          <i className='far fa-newspaper'></i>
          &nbsp; NYT Scrubber &nbsp; |
        </Link>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle Navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav'>
            <li className={'nav-item ' + (window.location.pathname.endsWith('/') ? 'active' : '')}>
              <Link className='nav-link' to='/'>
                <i className='fas fa-home'></i>
                &nbsp; Home &nbsp; |
              </Link>
            </li>
            <li className={'nav-item ' + (window.location.pathname.endsWith('saved-articles') ? 'active' : '')}>
              <Link className='nav-link' to='/saved-articles'>
                <i className='fas fa-archive'></i>
                &nbsp; Saved Articles &nbsp;
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
);