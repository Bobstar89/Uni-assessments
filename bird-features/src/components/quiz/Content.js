import React from 'react';
import anatomy from './images/anatomy.png';

export default class Content extends React.Component {
  render() {
    return (
      <div id='content'>
        <p id='question'> Which is not a part of a bird{`'`}s anatomy? </p>
        <div id='answers'>
          <div className='answer'>
            <input type='radio' value='beak' id='beak' name='quiz'/> <label for='beak'> Beak </label>
          </div>
          <div className='answer'>
            <input type='radio' value='crown' id='crown' name='quiz'/> <label for='crown'> Crown </label>
          </div>
          <div className='answer'>
            <input type='radio' value='chest' id='chest' name='quiz'/> <label for='chest'> Chest </label>
          </div>
          <div className='answer'>
            <input type='radio' values='hip' id='hip' name='quiz'/> <label for='hip'> Hip </label>
          </div>
        </div>
        <div id='image'>
          <img src={anatomy} alt= 'anatomy' width='130px' height='130px'/>
        </div>
      </div>
    );
  }
}
