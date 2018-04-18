import React, { Component } from "react";

import { connect } from "react-redux";
import { getCampaigns } from "../../ducks/campaignReducer";

import CampaignCard from "./CampaignCard/CampaignCard";
import CampaignForm from "./CampaignForm/CampaignForm";

import "./CampaignList.css";

class CampaignList extends Component {
  constructor() {
    super();
    this.state = {
      isCreating: false
    };
    this.createSwitch = this.createSwitch.bind(this);
  }

  componentDidMount() {
    this.props.getCampaigns();
    console.log(this.props);
  }
  createSwitch() {
    !this.state.isCreating
      ? this.setState({ isCreating: true })
      : this.setState({ isCreating: false });
  }

  render() {
    let campaigns = this.props.campaigns;
    const isCreatingCampaign = this.state.isCreating;

    return (
      <div className="Campaign-dash">
        <div>
          <h1>Active Campaigns</h1>
          <button onClick={this.createSwitch}>Add Campaign</button>
          <div className="campaign-form-container">
            {isCreatingCampaign ? <CampaignForm /> : null}
          </div>
        </div>
        <div>
          {campaigns &&
            campaigns.map((campaign, index) => {
              return (
                <CampaignCard
                  key={index}
                  name={campaign.name}
                  orglogo={campaign.orglogo}
                  organization={campaign.organization}
                  type={campaign.type}
                  description={campaign.description}
                />
              );
            })}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    ...state.campaignReducer,
    ...state.userReducer
  };
};

export default connect(mapStateToProps, { getCampaigns })(CampaignList);
