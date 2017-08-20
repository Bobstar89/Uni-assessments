import React from 'react';

import Header from '../components/quiz/Content';
import Navigation from '../components/quiz/Score';
import Footer from '../components/quiz/Navigation';

export default class Home extends React.Component {
  render() {
    return (
      <div id='content'>
        <Subjects />
        <Information />
      </div>
    );
  }
}
