import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "../ducks/userReducer";
import withRouter from "react-router-dom";

class ProfilePage extends Component {
  render() {
    console.log(this.props.user);

    return (
      <div>
        User Profile
        <div>
          <h1>
            {this.props.user.first_name} {this.props.user.last_name}
          </h1>
          <h3>Address:</h3>
          {this.props.user.address} {this.props.user.city}
          {this.props.user.state}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.userReducer
  };
};

export default connect(mapStateToProps, { getUser })(ProfilePage);
