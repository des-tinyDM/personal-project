import React, { Component } from "react";
import { connect } from "react-redux";
import {
  updateCampaignName,
  updateCampaignOrganization,
  updateCampaignDescription,
  updateCampaignScope,
  updateCampaignType,
  updateCampaignLogo,
  getCampaigns,
  submitCampaign,
  updateCampaignInfo
} from "../../../ducks/campaignReducer";
import "./CampaignForm.css";

class CampaignForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitHandler(e) {
    e.preventDefault();
    submitCampaign(
      this.props.name,
      this.props.organization,
      this.props.orglogo,
      this.props.type,
      this.props.scope,
      this.props.description
    );
  }

  render() {
    let {
      updateCampaignName,
      updateCampaignOrganization,
      updateCampaignDescription,
      updateCampaignScope,
      updateCampaignType,
      updateCampaignLogo,
      submitCampaign,
      updateCampaignInfo
    } = this.props;

    return (
      <form className="campaign-form" onSubmit={e => this.submitHandler(e)}>
        <p>Campaign Name</p>
        <input
          placeholder="Your Campaign Name here"
          onChange={e => updateCampaignName(e.target.value)}
        />
        <p>Organization</p>
        <input
          type="text"
          onChange={e => updateCampaignOrganization(e.target.value)}
        />
        <p>Organization Logo</p>
        <input onChange={e => updateCampaignLogo(e.target.value)} />
        <p>Type</p>
        <select
          className="scope"
          size="3"
          multiple
          onChange={e => updateCampaignType(e.target.value)}
        >
          <option value="Single-Issue">Single-Issue</option>
          <option value="Candidate">Candidate</option>
          <option value="Community Organizing">Community Organizing</option>
          <option value="Ballot">Ballot</option>
          <option value="Referendem">Referendem</option>
        </select>
        <p>Scope</p>
        <select
          className="scope"
          size="3"
          onChange={e => updateCampaignScope(e.target.value)}
        >
          <option value="National">National</option>
          <option value="Statewide">Statewide</option>
          <option value="Local">Local</option>
        </select>
        <p>Description</p>
        <textarea
          className="description"
          onChange={e => updateCampaignDescription(e.target.value)}
        />
        <input type="submit" value="Start Your Campaign" />
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.campaignReducer,
    organization: state.organization,
    name: state.name,
    type: state.type,
    description: state.description,
    orglogo: state.orglogo,
    scope: state.scope,
    active: state.active
  };
}

export default connect(mapStateToProps, {
  updateCampaignName,
  updateCampaignOrganization,
  updateCampaignLogo,
  updateCampaignDescription,
  updateCampaignScope,
  updateCampaignType,
  getCampaigns,
  submitCampaign,
  updateCampaignInfo
})(CampaignForm);
