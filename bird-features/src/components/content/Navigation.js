import React from 'react';

export default class Navigation extends React.Component {
  render() {
    return (
      <div id='navigation'>
        {this.props.currentPage > 0 &&
          <a onClick={ () => this.props.traversalHandler(this.props.subject, this.props.currentPage-1) }>Previous</a>
        }

        {this.props.currentPage <= this.props.maxPage && this.props.currentPage != null &&
          <a onClick={ () => this.props.traversalHandler(this.props.subject, this.props.currentPage+1) }>Next</a>
        }
        {this.props.currentPage != null &&
          <a href='#'>Notebook</a>
        }
      </div>
    );
  }
}
