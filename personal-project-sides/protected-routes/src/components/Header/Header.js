import React from "react";
import { connect } from "react-redux";

const Header = props => {
  return (
    <div>
      <header className="website-header">
        <h1>SiteLOGO</h1>
        <div>About</div>
        <div>Contact</div>
        <div>OtherThing</div>
        <button>
          {props.user.first_name ? <p>Sign Out</p> : <p>Log In</p>}
        </button>
      </header>
    </div>
  );
};

export default Header;
