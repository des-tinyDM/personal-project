import axios from "axios";

const GET_CAMPAIGNS = "GET_CAMPAIGNS";
const GET_JOINED = "GET_JOINED";
const UPDATE_CAMPAIGN_NAME = "UPDATE_CAMPAIGN_NAME";
const UPDATE_CAMPAIGN_ORGANIZATION = "UPDATE_CAMPAIGN_ORGANIZATION";
const UPDATE_CAMPAIGN_TYPE = "UPDATE_CAMPAIGN_TYPE";
const UPDATE_CAMPAIGN_SCOPE = "UPDATE_CAMPAIGN_SCOPE";
const UPDATE_CAMPAIGN_DESCRIPTION = "UPDATE_CAMPAIGN_DESCRIPTION";
const UPDATE_CAMPAIGN_ORGLOGO = "UPDATE_CAMPAIGN_ORGLOGO";
const SUBMIT_CAMPAIGN = "SUBMIT_CAMPAIGN";
const UPDATE_CAMPAIGN_INFO = "UPDATE_CAMPAIGN_INFO";

const initialState = {
  campaigns: [],
  joined: [],
  isLoading: false,
  name: "",
  organization: "",
  orglogo: "",
  description: "",
  scope: ""
};

export function getCampaigns() {
  return {
    type: GET_CAMPAIGNS,
    payload: axios
      .get(`/api/campaigns`)
      .then(response => {
        console.log(response);
        return response.data;
      })
      .catch(err => err)
  };
}

export function getCampaignsJoined(user_id) {
  return {
    type: GET_JOINED,
    payload: axios
      .get(`/api/campaigns/joined/${user_id}`)
      .then(response => {
        console.log(response);
        return response.data;
      })
      .catch(err => err)
  };
}

export function submitCampaign(
  name,
  organization,
  orglogo,
  type,
  scope,
  description,
  user_id
) {
  return {
    type: SUBMIT_CAMPAIGN,
    payload: axios.post(`/api/campaign`, {
      name,
      organization,
      orglogo,
      type,
      scope,
      description,
      user_id
    })
  };
}

export function updateCampaignInfo(
  name,
  organization,
  orglogo,
  type,
  scope,
  description
) {
  return {
    type: UPDATE_CAMPAIGN_INFO,
    payload: axios.post(`/api/campaign/:id`, {
      name,
      organization,
      orglogo,
      type,
      scope,
      description
    })
  };
}

export function updateCampaignName(name) {
  return {
    type: UPDATE_CAMPAIGN_NAME,
    payload: name
  };
}
export function updateCampaignOrganization(organization) {
  return {
    type: UPDATE_CAMPAIGN_ORGANIZATION,
    payload: organization
  };
}
export function updateCampaignType(type) {
  return {
    type: UPDATE_CAMPAIGN_TYPE,
    payload: type
  };
}
export function updateCampaignDescription(description) {
  return {
    type: UPDATE_CAMPAIGN_DESCRIPTION,
    payload: description
  };
}
export function updateCampaignScope(scope) {
  return {
    type: UPDATE_CAMPAIGN_SCOPE,
    payload: scope
  };
}
export function updateCampaignLogo(orglogo) {
  return {
    type: UPDATE_CAMPAIGN_ORGLOGO,
    payload: orglogo
  };
}

export default function campaignReducer(state = initialState, action) {
  console.log("ACTION HYPE!", action.type);
  switch (action.type) {
    case `${GET_CAMPAIGNS}_PENDING`:
    case `${GET_JOINED}_PENDING`:
      return Object.assign({}, state, { isLoading: true });
    case `${GET_CAMPAIGNS}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        campaigns: action.payload
      });
    case UPDATE_CAMPAIGN_NAME:
      return Object.assign({}, state, { name: action.payload });

    case UPDATE_CAMPAIGN_DESCRIPTION:
      return Object.assign({}, state, { description: action.payload });

    case UPDATE_CAMPAIGN_ORGANIZATION:
      return Object.assign({}, state, { organization: action.payload });

    case UPDATE_CAMPAIGN_SCOPE:
      return Object.assign({}, state, { scope: action.payload });

    case UPDATE_CAMPAIGN_TYPE:
      return Object.assign({}, state, { type: action.payload });

    case UPDATE_CAMPAIGN_ORGLOGO:
      return Object.assign({}, state, { orglogo: action.payload });
    case `${SUBMIT_CAMPAIGN}_PENDING`:
      return Object.assign({}, state, { isSubmitting: true });
    case `${SUBMIT_CAMPAIGN}_FULFILLED`:
      console.log(action);
      return Object.assign({}, state, {
        isSubmitting: false,
        campaigns: action.payload.data
      });
    case `${UPDATE_CAMPAIGN_INFO}_FULFILLED`:
      return Object.assign({}, state, { campaigns: action.payload.data });
    case `${GET_CAMPAIGNS}_FULFILLED`:
      return Object.assign({}, state, { joined: action.payload.data });
    default:
      return state;
  }
}
