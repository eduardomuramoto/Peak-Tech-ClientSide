import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/index';

class News extends React.Component {

  render() {
    return (
      <div className={this.props.newsOpen ? "news-open" : "news-closed"}>
        <h1>News</h1>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    newsOpen: state.newsOpen
  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(News);
