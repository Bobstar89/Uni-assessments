import React from 'react';

export default class Feature extends React.Component {
  render() {
    return (
      <div id='splash-feature'>
        <map name='splash'>
          <area title='bee-eater' shape='rect' coords='265, 350, 344 ,411' href='#'/>
          <area title='drongo' shape='rect' coords='85, 190, 166, 436' href='#'/>
          <area title='jacamar' shape='rect' coords='181, 158, 265, 291' href='#'/>
          <area title='turaco' shape='rect' coords='615, 40, 764, 140' href='#'/>
          <area title='sandgrouse' shape='rect' coords='2, 443, 97 ,572' href='#'/>
          <area title='shrike-babbler' shape='rect' coords='346, 494, 471, 598' href='#'/>
          <area title='warbler' shape='rect' coords='559, 485, 646 ,591' href='#'/>
          <area title='oxylabes' shape='rect' coords='444, 410, 547 ,520' href='#'/>
          <area title='firecrest' shape='rect' coords='562, 427, 683 ,497' href='#'/>
        </map>
        <img class='splash' src='images/splash.png' useMap='splash'/>
      </div>
    );
  }
}
