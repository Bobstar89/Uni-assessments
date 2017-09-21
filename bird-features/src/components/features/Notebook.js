import React from 'react';
import dartford from './images/dartford.png';
export default class Splash extends React.Component {
  render() {
    return (
      <div id='book'>
        <div id='pic-page'>
          <div id='bird-info'>
            <img id='pic' alt='dartford' src={dartford}/>
            <div id='details'>
              <div id='titles'>
                <p> Name: </p>
                <p> Location: </p>
              </div>
              <div id='descriptions'>
                <p> Dartford </p>
                <p> Australia </p>
              </div>
            </div>
          </div>
        </div>
        <div id='notes-page'>
          <textarea id='notebook' cols='28' rows='25'></textarea>
        </div>
      </div>
    )
  }
}
