import React from "react";
import "./CampaignCard.css";

const CampaignCard = props => {
  return (
    <div className="campaign-card">
      <h1>{props.name}</h1>
      <img className="orglogo" src={props.orglogo} alt="Campaign's emblem."/>
      <h2>{props.organization}</h2>
      <h3>{props.type}</h3>
      <p>{props.description}</p>
      <button className="join-campaign">JOIN THIS CAMPAIGN</button>
    </div>
  );
};

export default CampaignCard;
