import React from 'react';

import Content from './Content';
import Score from './Score';
import Navigation from './Navigation';

export default class QuizGUI extends React.Component {
  render() {
    return (
      <main>
        <div id='quiz'>
          <Content />
          <Score />
          <Navigation />
        </div>
      </main>
    );
  }
}
