import React from 'react';
import ReactDOM from 'react-dom';

export default class Navigation extends React.Component {
  render() {
    return (
      <nav class='activities'>
        <a class='nav-button' href='../pages/Home'> Home </a>
        <a class='nav-button' href='#'> Sanctuary </a>
        <a class='nav-button' href='../pages/Quiz'> Quiz </a>
        <a class='nav-button' href='static/learn.php'> Learn </a>
      </nav>
    )
  }
}
