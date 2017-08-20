import React from 'react';

export default class Score extends React.Component {
  render() {
    return (
      <div class='score'>
        <p class='current'> Score: 1 </p>
        <p class='best'> Best: 10 </p>
      </div>
    );
  }
}
