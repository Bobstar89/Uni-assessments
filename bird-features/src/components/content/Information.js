import React from 'react';
import Navigation from './Navigation';

export default class Information extends React.Component {
  render() {
    return (
      <div id='information'>
          <h1>{ this.props.subject }</h1>

          <p> { this.props.information }</p>
          
          <Navigation subject = {this.props.subject}
                      maxPage = {this.props.maxPagesIndex}
                      currentPage = {this.props.page}
                      traversalHandler = { this.props.traversalHandler }
          />
      </div>
    );
  }
}
