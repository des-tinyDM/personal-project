import React, { Component } from "react";
import "./App.css";
import {
  HashRouter as Router,
  Route,
  Switch,
  Link,
  withRouter
} from "react-router-dom";
import { connect } from "react-redux";

import routes from "./routes";
import UserDash from "./components/UserDash";
import LandingPage from "./components/LandingPage";
import ProfilePage from "./components/ProfilePage";
import { getUser } from "./ducks/userReducer";
import Forbidden from "./components/Forbidden";
import Campaigns from "./components/CampaignList/CampaignList";

class App extends Component {
  componentDidMount() {
    this.props.getUser();
    // console.log(this.props);
  }

  render() {
    console.log(this.props.user);

    return (
      <div>
        <header className="website-header">
          <h1>SiteLOGO</h1>
          <div>About</div>
          <div>Contact</div>
          <div>OtherThing</div>
          <div>
            {this.props.user.authid ? (
              <div>
                <a href={process.env.REACT_APP_LOGOUT}>
                  <button>Logout</button>
                </a>
              </div>
            ) : (
              <a href={process.env.REACT_APP_LOGIN}>
                <button>Login to Volunteer</button>
              </a>
            )}
          </div>
        </header>
        <Switch>
          <Route
            exact
            path="/"
            component={this.props.user.authid ? UserDash : LandingPage}
          />
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
            path="/campaigns"
            render={() =>
              this.props.user.authid ? (
                <Campaigns />
              ) : (
                <p>Login to Create A Campaign</p>
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
export default withRouter(connect(mapStateToProps, { getUser })(App));
