import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

import CreateAccountButton from "./Buttons/CreateAccountButton";

const LandingPage = () => {
  return (
    <div>
      <div className="landing">
        <a href={process.env.REACT_APP_LOGIN}>
          <button>Login to Volunteer</button>
        </a>
        <Link to="/campaigns">
          <button>Explore the Campaigns</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
