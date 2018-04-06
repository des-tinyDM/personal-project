require('dotenv').config();
const express = require('express');
const {json} = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 4000;
const massive = require('massive');
const hc = require('./controllers/housing_controller')

const app = express();

massive(process.env.CONNECTION_STRING).then(dbInstance => app.set('db', dbInstance));

app.use( json() );
app.use( cors() );

app.get(`/api/listings`, hc.getListings)
app.post(`/api/listing`, hc.postListing)
app.delete(`/api/listing/:id`, hc.deleteListing)

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
})