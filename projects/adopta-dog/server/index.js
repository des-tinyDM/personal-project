//Import dependencies
const express = require('express');
const {json} = require('body-parser');
// const cors = require('cors')

//Import Controller methods
const dc = require('./controllers/dog_controller')

//Set React port to 3000 and server to 3001. Proxy set to 3001 in JSON.
const port = 3001;

//Create express app and set middleware
const app = express();

app.use( json() );
// app.use( cors() );

//Restful endpoints which direct code into controller
app.get("/api/dogs/random", dc.getDog);
app.get("/api/dogs", dc.viewAdopted)
app.post("/api/dogs", dc.adoptCurrentDog);
app.put("/api/dogs/:id", dc.changeTitle);
app.delete("/api/dogs/:id", dc.abandonDog);
// app.delete("/api/dog:id", dc.emptyPound);


//Server listening
app.listen(port, () => console.log(`Listening on port ${port}`));