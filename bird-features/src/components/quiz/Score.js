import React from 'react';

export default class Score extends React.Component {
  render() {
    return (
      <div id='score'>
        <p id='current'> Score: 1 </p>
        <p id='best'> Best: 10 </p>
      </div>
    );
  }
}
