import React from 'react';

import Subjects from '../components/content/Subjects';
import Information from '../components/content/Information';

export default class Content extends React.Component {
  constructor() {
    super();

    var _this = this;
    this.state = {
      subject: null,
      information: null,
      page: null,
      maxPagesIndex: null
    }

    this.subjectTraversalHandler = function(topicName, section)
    {
      var subjectsClass = new Subjects();
      var information = subjectsClass.fetchInformation(topicName.toLowerCase(), section);
      var pageCount = subjectsClass.fetchTotalPages(topicName.toLowerCase());
      console.log(pageCount);
      this.setState({subject: topicName, information: information, page: section, maxPagesIndex: pageCount});
    }
  }

  render() {
    return (
      <div id='content'>
        <Subjects traversalHandler = {this.subjectTraversalHandler.bind(this)} />
        <Information {...this.state} traversalHandler= {this.subjectTraversalHandler.bind(this)} />
      </div>
    );
  }
}
