const getCampaigns = (req, res) => {
  const db = req.app.get("db");
  const {
    name,
    organization,
    orglogo,
    type,
    scope,
    description,
    active
  } = req.body;

  db.campaign
    .getCampaignList()
    .then(response => res.status(200).json(response))
    .catch(err => res.status(500).json(err));
};

const createCampaign = (req, res) => {
  const db = req.app.get("db");
  const {
    name,
    organization,
    orglogo,
    type,
    scope,
    description,
    user_id
  } = req.body;

  db.campaign
    .createCampaign([
      name,
      organization,
      orglogo,
      type,
      scope,
      description,
      user_id
    ])
    .then(response => {
      console.log(response);
      res.status(200).json(response);
    })
    .catch(console.log);
};

// const updateCampaignInfo = (req, res, next) => {
//   const db = req.app.get("db");
//   const {
//     name,
//     organization,
//     orglogo,
//     type,
//     scope,
//     description,
//     active
//   } = req.body;
// };

// db
//   .updateCampaignInfo([
//     name,
//     organization,
//     orglogo,
//     type,
//     scope,
//     description,
//     active
//   ])
//   .then(response =>
//     res
//       .status(200)
//       .json(response)
//       .catch(console.log)
//   );

const addCampaigns = (req, res) => {
  const db = req.app.get("db");

  db.campaign
    .userJoinsCampaign([req.user.id, req.params.id])
    .then(response => getCampaigns(req, res))
    .catch(err => res.status(500).json(err));
};

const getCampaignsJoined = (req, res) => {
  const db = req.app.get("db");
  console.log(req.params);

  db.campaign
    .getCampaignJoined(req.params.user_id)
    .then(response => {
      console.log(response);
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

module.exports = {
  getCampaigns,
  createCampaign,
  getCampaignsJoined
  // updateCampaignInfo
};
