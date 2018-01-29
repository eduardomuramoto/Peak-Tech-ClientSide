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
      .then (res => (
        this.setState({
          newSearchTerm: {
            name: ""
          },
          allSearchTerms: res
        })
      ))
  }

  handleSubmit(newSearchInfo){
    const newSearch = this.state.allSearchTerms.slice(0);
    SearchTerm
      .create(newSearchInfo)
      .then(res => {newSearch.push({id: res.id, title: res.title})
        this.setState(Object.assign({}, this.state, {allSearchTerms: newSearch}));
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
        <h2>News</h2>
        <form>
          <div className="form-group row">
            <div className="col-sm-12">
              <label htmlFor="title">Search Terms</label>
              <input type="text" className="form-control" id="input_title" name="title" onChange={this.handleChange.bind(this)} value={this.state.title}  placeholder="Title"/>
            </div>
          </div>
          <p>List of Google News search terms to be fetched daily</p>
          <div className="form-group row">
            <div className="col-sm-12 button-column">
              <button type="button" id="form-submit" onClick={()=>this.handleSubmit()}>SUBMIT</button>
            </div>
          </div>
        </form>
        <table>
          <tr><th>Search Term</th><th>Action</th></tr>
          {/* { this.state.terms.map(term => (
            <tr>
              <td>{term.title}</td>
              <td>
                <button
                    onClick={this.deleteProduct(term.id)}
                  >remove
                </button>
              </td>
            </tr>
            ))
          } */}
        </table>
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
