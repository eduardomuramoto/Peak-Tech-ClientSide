import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../actions/index';

class AdminUsers extends React.Component {
  render() {
    return (
      <div className={this.props.adminUsersOpen ? "adminusers-open" : "adminusers-closed"}>
        <div className="container">
          <form className='admin-form'>

            <h4 className="admin-title-header">PENDING CLAIM REQUESTS</h4>

            <div className="container-fluid">
              <div className="row">

              <table className="table table-bordered">
                <thead>
                  <tr className="admin-table-row">
                    <th scope="col-md-12" className="admin-table-head">NAME</th>
                    <th scope="col-md-12" className="admin-table-head">EMAIL</th>
                    <th scope="col-md-12" className="admin-table-head">ORGANIZATION</th>
                    <th scope="col-md-12" className="admin-table-head">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className="admin-data">JOE SMITH</th>
                    <td className="admin-data-remove">joe@wishpond.com</td>
                    <th scope="row" className="admin-data">Wishpond</th>
                    <td className="admin-data-remove">accept reject</td>
                  </tr>
                  <tr>
                    <th scope="row" className="admin-data">JOE SMITH</th>
                    <td className="admin-data-remove">joe@wishpond.com</td>
                    <th scope="row" className="admin-data">Wishpond</th>
                    <td className="admin-data-remove">accept reject</td>
                  </tr>

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
    adminUsersOpen: state.adminUsersOpen
  }
};

const mapDispatchToProps = (state) => {
  return {

  }
};


export default connect(mapStateToProps, mapDispatchToProps)(AdminUsers);
