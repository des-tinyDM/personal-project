require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");

const session = require("express-session");
const massive = require("massive");
const passport = require("passport");

const {
  getCampaigns,
  createCampaign,
  updateCampaignInfo
} = require(`${__dirname}/controllers/campaignController`);
const {
  strategy,
  getUser,
  logout
} = require(`${__dirname}/controllers/authController`);

const port = process.env.PORT || 3001;

const app = express();

massive(process.env.CONNECTION_STRING)
  .then(db => app.set("db", db))
  .catch(err => console.log(err));

app.use(json());
app.use(cors());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 100000
    }
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(strategy);

passport.serializeUser((user, done) => {
  app
    .get("db")
    .getUserByAuthid(user.id)
    .then(response => {
      if (!response[0]) {
        app
          .get("db")
          .addUserByAuthid([user.name.givenName, user.name.familyName, user.id])
          .then(res => {
            return done(null, res[0]);
          })
          .catch(err => console.log(err));
      } else {
        return done(null, response[0]);
      }
    })
    .catch(err => console.log(err));
});
passport.deserializeUser((user, done) => {
  return done(null, user);
});

//AUTH ENDPOINTS
app.get(
  `/auth`,
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/#/",
    failureRedirect: "http://localhost:3001/auth"
  })
);

app.get("/logout", logout);
app.get("/api/me", getUser);

//ENDPOINTS
app.get(`/api/campaigns`, getCampaigns);
app.post(`/api/campaign`, createCampaign);
// app.put(`/api/campaign/:id`, updateCampaignInfo);

app.listen(port, () => {
  console.log(`Comin' at you from ${port}`);
});
