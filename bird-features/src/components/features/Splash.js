import React from 'react';
import splash from './images/splash.png';

export default class Splash extends React.Component {
  render() {
    return (
      <div id='splash'>
        <map name='splash'>
          <area alt='bee-eater' title='bee-eater' shape='rect' coords='265, 350, 344 ,411' href='#'/>
          <area alt='drongo' title='drongo' shape='rect' coords='85, 190, 166, 436' href='#'/>
          <area alt='jacamar' title='jacamar' shape='rect' coords='181, 158, 265, 291' href='#'/>
          <area alt='turaco' title='turaco' shape='rect' coords='615, 40, 764, 140' href='#'/>
          <area alt='sandgrouse' title='sandgrouse' shape='rect' coords='2, 443, 97 ,572' href='#'/>
          <area alt='shrike-babbler' title='shrike-babbler' shape='rect' coords='346, 494, 471, 598' href='#'/>
          <area alt='warbler' title='warbler' shape='rect' coords='559, 485, 646 ,591' href='#'/>
          <area alt='oxylabes' title='oxylabes' shape='rect' coords='444, 410, 547 ,520' href='#'/>
          <area alt='firecrest' title='firecrest' shape='rect' coords='562, 427, 683 ,497' href='#'/>
        </map>
        <img id='feature' src={splash} useMap='splash'/>
      </div>
    );
  }
}
