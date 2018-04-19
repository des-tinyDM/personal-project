import React, { Component } from "react";
import { connect } from "react-redux";

import { getCampaignsJoined } from "../../../ducks/campaignReducer";
import { getUser } from "../../../ducks/userReducer";

class MyCampaignInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getUser().then(() => {
      this.props.getCampaignsJoined(this.props.user.user_id);
    });
  }
  render() {
    console.log(this.props);
    return <div>These are your campaigns:</div>;
  }
}

const mapStateToProps = state => {
  return {
    ...state.userReducer,
    ...state.campaignReducer,
    joined: state.campaignReducer.joined
  };
};

export default connect(mapStateToProps, { getCampaignsJoined, getUser })(
  MyCampaignInfo
);
