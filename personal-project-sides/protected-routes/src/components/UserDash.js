import React, { Component } from "react";
import "./UserDash.css";
import { Link, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import { getUser } from "../ducks/userReducer";

class UserDash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <header className="dash-header">
          <h1>{this.props.user.first_name}'s Dash</h1>
          <div>My Profile</div>
          <Link to="/profile">My Profile</Link>
          <div>My Campaigns</div>
          <div>Events</div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.userReducer
  };
};

export default connect(mapStateToProps, { getUser })(UserDash);
