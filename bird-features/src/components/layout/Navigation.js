import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
  return (
    <nav className='activities'>
      <Link to='/' className='nav-button'> Home </Link>
      <Link to='sanctuary' className='nav-button'> Sanctuary </Link>
      <Link to='quiz' className='nav-button'> Quiz </Link>
      <Link to='content' className='nav-button'> Learn </Link>
    </nav>
  );
};

export default Navigation;
