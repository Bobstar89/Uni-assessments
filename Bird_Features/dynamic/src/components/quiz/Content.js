import React from 'react';

export default class Content extends React.Component {
  render() {
    return (
      <div class='content'>
        <p class='question'> Which is not a part of a bird{`'`}s anatomy? <p>
        <div class='answers'>
          <div class='answer'>
            <input type='radio' value='beak' id='beak' name='quiz'/> <label for='beak'> Beak </label>
          </div>
          <div class='answer'>
            <input type='radio' value='crown' id='crown' name='quiz'/> <label for='crown'> Crown </label>
          </div>
          <div class='answer'>
            <input type='radio' value='chest' id='chest' name='quiz'/> <label for='chest'> Chest </label>
          </div>
          <div class='answer'>
            <input type='radio' values='hip' id='hip' name='quiz'/> <label for='hip'> Hip </span>
          </div>
        </div>
        <div class='image'>
          <img src='images/anatomy.png' width='130px' height='130px'/>
        </div>
      </div>
    );
  }
}
