import React, { Component } from "react";
import "./UserDash.css";
import { Link, Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { getUser } from "../../ducks/userReducer";
import DashHeader from "./DashHeader";
import MyCampaignInfo from "./MyCampaignInfo/MyCampaignInfo";
import Forbidden from "../Forbidden";
import ProfilePage from "./ProfilePage/ProfilePage";

class UserDash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props);
    return (
      <div className="user-dash">
        <DashHeader user={this.props.user} />
        THIS IS THE DASHBOARD. COOL COMPONENTS HERE.
        <Switch>
          <Route
            exact
            path="/profile"
            render={() =>
              this.props.user.authid ? (
                <ProfilePage user={this.props.user} />
              ) : (
                <Forbidden />
              )
            }
          />
          <Route
            exact
            path="/mycampaign"
            render={() =>
              this.props.user.authid ? (
                <MyCampaignInfo />
              ) : (
                <h1>Why haven't you joined a campaign? Log in to volunteer!</h1>
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.userReducer
  };
};

export default withRouter(connect(mapStateToProps, { getUser })(UserDash));
