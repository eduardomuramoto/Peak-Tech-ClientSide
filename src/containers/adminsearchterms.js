import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/index';
import {SearchTerm} from '../requests/search_terms';

class AdminSearchTerms extends React.Component {
  constructor () {
    super();

    this.state = {
      newSearchTerm: {
        title: ""
      },
      allSearchTerms: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    SearchTerm
      .all()
      .then (res => {
        console.log('res', res);
        this.setState({
          newSearchTerm: {
            title: ""
          },
          allSearchTerms: res
        })
      })
  }

  handleSubmit(newSearchInfo){
    const newSearch = this.state.allSearchTerms.slice(0);
    SearchTerm
      .create(newSearchInfo)
      .then(res => {newSearch.unshift({id: res.id, title: res.title})
        this.setState(Object.assign({}, this.state, {allSearchTerms: newSearch, newSearchTerm: {title: ""}}));
    })
  }

  handleChange(event) {
    const newState = Object.assign({}, this.state, {
      newSearchTerm: {title: event.target.value}
    });
    this.setState(newState);
  }

  deleteSearchTerm(termId) {
    const filteredTerms = this.state.allSearchTerms.filter(term => term.id !== termId)
    const newState = Object.assign({}, this.state.allSearchTerms, {
      allSearchTerms: filteredTerms
    });
    this.setState(newState);
    SearchTerm
      .destroy(termId)
  }

  render() {
    return (
      <div className={this.props.adminNewsOpen ? "adminnews-open" : "adminnews-closed"}>
        <div className="container">
        <form className="admin-form">
          <h4 className="admin-title-header">NEWS</h4>
          <div className="form-group row">
            <div className="col-sm-3 add-tag">
              <p>SEARCH TERM</p>
            </div>
            <div className="col-sm-7">
              <input type="text" className="form-control input_title" name="title" onChange={this.handleChange.bind(this)} value={this.state.newSearchTerm.title}></input>
            </div>
            <div className="col-sm-2 button-column">
              <button type="button" className="form-submit" onClick={()=>this.handleSubmit(this.state.newSearchTerm)}>ADD</button>
            </div>
          </div>

          <div className="admin-snippet">
            <p>LIST OF GOOGLE NEWS SEARCH TERMS TO BE FETCHED DAILY</p>
          </div>

          <div className="container-fluid">
            <div className="row">
            <table className="table table-bordered">
              <thead>
                <tr className="admin-table-row">
                  <th scope="col-md-12" className="admin-table-head">SEARCH TERM</th>
                  <th scope="col-md-12" className="admin-table-head">ACTION</th>
                </tr>
              </thead>

              <tbody>
                { this.state.allSearchTerms.map(term => (
                  <tr key={term.id}>
                    <th scope="row" className="admin-data">{term.title}</th>
                    <td className="admin-data-remove">
                      <button
                        onClick={()=>this.deleteSearchTerm(term.id)}
                        >REMOVE
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        </form>
      </div>
    </div>
    )
  }
};


const mapStateToProps = (state) => {
  return {
    adminNewsOpen: state.adminNewsOpen,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
};


export default connect(mapStateToProps, mapDispatchToProps)(AdminSearchTerms);
