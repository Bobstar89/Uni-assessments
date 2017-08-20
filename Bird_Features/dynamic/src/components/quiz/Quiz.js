import React from 'react';

import Content from '../components/quiz/Content';
import Score from '../components/quiz/Score';
import Navigation from '../components/quiz/Navigation';

export default class Quiz extends React.Component {
  render() {
    return (
      <div id='quiz'>
        <Content />
        <Score />
        <Navigation />
      </div>
    );
  }
}
