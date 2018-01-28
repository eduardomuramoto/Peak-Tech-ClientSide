import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/index';
import SearchTerm from '../requests/search_terms';

class AdminSearchTerms extends React.Component {
  constructor () {
    super();

    this.state = {
      newSearchTerm: {
        title: ""
      }
    };
  }

  handleSubmit(){
    SearchTerm
      .create({title: this.state.newSearchTerm})
      console.log({title: this.state.newSearchTerm})
  }

  handleChange(event) {
    const newState = Object.assign({}, this.state, {
      [event.target.name]: event.target.value,
    });
    this.setState(newState);
  }

  render() {
    // const terms = SearchTerm.all();

    return (
      <div className={this.props.adminSearchTermsOpen ? "adminsearchterms-open" : "adminsearchterms-closed"}>
        <form>
          <div className="form-group row">
            <div className="col-sm-12">
              <input type="text" className="form-control" id="input_title" name="title" onChange={this.handleChange.bind(this)} value={this.state.title}  placeholder="Title"/>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-12 button-column">
              <button type="button" id="form-submit" onClick={()=>this.handleSubmit()}>SUBMIT</button>
            </div>
          </div>
        </form>
        {/* <table>
          <tr><th>Search Term</th><th>Action</th></tr>
          { terms.map(term => (
            <tr>
              <td>{term.title}</td>
              <td>
                <button
                    onClick={this.deleteProduct(term.id)}
                  >Delete
                </button>
              </td>
            </tr>
            ))
          }
        </table> */}
      </div>
    )
  }
};


const mapStateToProps = (state) => {
  return {
    adminSearchTermsOpen: state.adminSearchTermsOpen,
  }
};

const mapDispatchToProps = (state) => {
  return {

  }
};


export default connect(mapStateToProps, mapDispatchToProps)(AdminSearchTerms);
