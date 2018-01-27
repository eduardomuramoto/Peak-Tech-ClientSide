import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/index';

class News extends React.Component {

  render() {

    const style = {
      backgroundImage: "url(https://www.what-dog.net/Images/faces2/scroll001.jpg)",
      height: "10vw",
      width: "10vw",
      backgroundSize: "cover"
    }

    return (
      <div className={this.props.newsOpen ? "news-open" : "news-closed"}>
        <div className="container">
          <div className = "row">
            <div className="col-md-2" style ={style}>
            </div>
            <div className="col-md-10">
              <h3>Tech Millionaire steps in to save historic Friedman house</h3>
              <p>7 hours ago - source: The Globe and Mail</p>
              <p>Tech millionaire steps in to save historic Friedman House... It's
                a rare event when a historically important house on Vancouver's west side is...
              </p>

            </div>
          </div>
          <hr/>
        </div>
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

//
