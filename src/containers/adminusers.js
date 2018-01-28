import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../actions/index';

class AdminUsers extends React.Component {
  render() {
    return (
      <div className={this.props.adminUsersOpen ? "adminusers-open" : "adminusers-closed"}>
        <div className="container">
          <div className="row">
          <h3>PENDING CLAIM REQUESTS</h3>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr> 
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    )
  }
};


const mapStateToProps = (state) => {
  return {
    adminUsersOpen: state.adminUsersOpen
  }
};

const mapDispatchToProps = (state) => {
  return {

  }
};


export default connect(mapStateToProps, mapDispatchToProps)(AdminUsers);
