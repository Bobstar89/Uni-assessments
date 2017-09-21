import React from 'react';

export default class Subjects extends React.Component {

  constructor() {
    super();
    var subjectsClass = this;
    this.info = {"bird anatomy":
                          {0: 'Many abilities of birds are possible through the important parts of their body, ' +
                              'including their throat and trachea giving them the ability to sing. ' +
                              'Their breast muscles along with the lightness of their wings and feathers ' +
                              'allow them to fly and their sharp beaks are helpful in finding food and ' +
                              'breaking a part food when it is too big to swallow.',

                           1: 'These are but few of the amazing features of birds that aid them in survival. ' +
                              'Using their talons they are able to hop across the ground and even power ' +
                              'lines and ropes, small bird are commonly seen hopping with ease,' +
                              'making food gathering a lot easier.',
                          },
                 "world of birds":
                         {0: 'Blah'},
                 "eating habits": {0: 'things'},
                 "taking flight": {0: 'stuff'},
                 "predator and prey": {0: 'other'}

                };



    this.fetchInformation = function(topic, page)
    {
      return this.info[topic][page];
    }

    this.fetchTotalPages = function(topic)
    {
      return Object.keys(this.info[topic]).length - 1;
    }
  }

  render() {
    return (
      <div className='subjects'>
        <a className='button' onClick={ () => this.props.traversalHandler('Bird Anatomy', 0) }> Bird Anatomy</a>
        <a className='button' onClick={ () => this.props.traversalHandler('World of Birds', 0) }> World of Birds</a>
        <a className='button' onClick={ () => this.props.traversalHandler('Eating Habits', 0) }> Eating Habits </a>
        <a className='button' onClick={ () => this.props.traversalHandler('Taking Flight', 0) }> Taking Flight </a>
        <a className='button' onClick={ () => this.props.traversalHandler('Predator and Prey', 0) }> Predator and Prey</a>
      </div>
    )
  }
}
