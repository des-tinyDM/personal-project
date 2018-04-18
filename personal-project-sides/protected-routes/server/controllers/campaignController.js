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

  db
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
    active
  } = req.body;

  db
    .createCampaign([
      name,
      organization,
      orglogo,
      type,
      scope,
      description,
      active
    ])
    .then(response => res.status(200).json(response))
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

  db
    .userJoinsCampaign([req.user.id, req.params.id])
    .then(response => getCampaigns(req, res))
    .catch(err => res.status(500).json(err));
};

const getUserCampaigns = (req, res) => {
  const db = req.app.get("db");

  db
    .getUserCampaigns(req.user.id)
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
  getUserCampaigns
  // updateCampaignInfo
};
