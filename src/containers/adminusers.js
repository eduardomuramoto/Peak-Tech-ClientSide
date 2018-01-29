import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../actions/index';
import {User} from '../requests/users';

class AdminUsers extends React.Component {
  constructor () {
    super();
    this.state = {
      allUsers: []
    };
  }

  componentDidMount() {
    User
      .all()
      .then (res => (
        this.setState({
          allUsers: res
        })
      ))
  }

  deleteUser(userId) {
    const filteredUsers = this.state.allUsers.filter(user => user.id !== userId)
    const newState = Object.assign({}, this.state.allUsers, {
      allUsers: filteredUsers
    });
    this.setState(newState);
    User
      .destroy(userId)
  }

  render() {
    return (
      <div className={this.props.adminUsersOpen ? "adminusers-open" : "adminusers-closed"}>
        <div className="container">
          <form className='admin-form'>

            <h4 className="admin-title-header">USERS</h4>

            <div className="container-fluid">
              <div className="row">

              <table className="table table-bordered">
                <thead>
                  <tr className="admin-table-row">
                    <th scope="col-md-12" className="admin-table-head">NAME</th>
                    <th scope="col-md-12" className="admin-table-head">EMAIL</th>
                    {/* <th scope="col-md-12" className="admin-table-head">ORGANIZATION</th> */}
                    <th scope="col-md-12" className="admin-table-head">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  { this.state.allUsers.map(user => (
                    <tr key={user.id}>
                      <th scope="row" className="admin-data">{user.full_name}</th>
                      <td className="admin-data-remove">{user.email}</td>
                      {/* <th scope="row" className="admin-data">{user.organization.name}</th> */}
                      <td className="admin-data-remove">
                        <button
                        onClick={()=>this.deleteUser(user.id)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))
                }
                  {/* <tr>
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
                  </tr> */}

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
