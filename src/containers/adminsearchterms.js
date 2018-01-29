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
      <div className={this.props.adminNewsOpen ? "adminnews-open" : "adminnews-closed"}>
        <form>
          <div className="form-group row">
            <div className="col-sm-12">
              <input type="text" className="form-control input_title" name="title" onChange={this.handleChange.bind(this)} value={this.state.title}  placeholder="Title"/>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-12 button-column">
              <button type="button" className="form-submit" onClick={()=>this.handleSubmit()}>SUBMIT</button>
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
    adminNewsOpen: state.adminNewsOpen,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
};


export default connect(mapStateToProps, mapDispatchToProps)(AdminSearchTerms);
