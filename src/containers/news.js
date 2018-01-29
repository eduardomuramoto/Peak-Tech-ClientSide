import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/index';
import {UserNews} from '../requests/news';

class News extends React.Component {

  componentDidMount(){
    this.props.fetchNewsAction();
  }

  render() {
    console.log('check me out! me!', this.props.news);
    const style = {
      backgroundImage: "url(http://www.vancouvereconomic.com/wp-content/uploads/2016/09/stock-photo-blue-night-1081103751-970x498.jpg)",
      width: "10vw",
      backgroundSize: "cover"
    }

    return (

      <div className={this.props.newsOpen ? "news-open" : "news-closed"}>
        <div className="container main-container">

        {
          this.props.news && this.props.news.map(news => (
            <div key={news.id} className="row news-row">
              <div className="col-sm-3 col-md-3 col-lg-3 news-item" style ={style}>
              </div>
              <div className="col-sm-9 col-md-9 col-lg-9">
                <a >{news.title}</a>
                <p className="snippet"><a href={news.url}>Read More...</a></p>
              </div>

            </div>
          ))
        }

        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    newsOpen: state.newsOpen,
    news: state.newsList,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNewsAction: () => { dispatch(actions.fetchNews())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(News);

//


// {/* <div className = "row news-row">
//   <div className="col-sm-3 col-md-3 col-lg-3 news-item" style ={style}>
//   </div>
//   <div className="col-sm-9 col-md-9 col-lg-9">
//     <a href="#"> Tech Millionaire steps in to save historic Friedman house</a>
//     <p className="snippet">7 hours ago - source: <a href="#">The Globe and Mail</a></p>
//     <p className="snippet">Tech millionaire steps in to save historic Friedman House... It's
//       a rare event when a historically important house on Vancouver's west side is...
//     </p>
//   </div>
// </div>
// <hr/>
