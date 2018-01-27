import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/index';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <nav>
          <div className="footer-nav">
            <a href="#">Sign In</a>
            <a href="#">Sign Out</a>
            <a href="#">About</a>
          </div>
          <p>
            Built and maintained by students from&nbsp;
            <a href="https://codecore.ca/">
              CodeCore
            </a>
          </p>
        </nav>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {

  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
