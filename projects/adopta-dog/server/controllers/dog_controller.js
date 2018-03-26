const axios = require('axios');
const baseurl = "https://dog.ceo/api/breeds/image/random";

//nodb, so store data here!
let adopted = [];
let poundDogs = [];
let title = "Destiny's Dogs";

//data requests received here! Server returns info or a 404 error, with custom message.

const getDog = (req, res, next) => {
    axios.get(baseurl).then(response => {
        response.data
        ? res.status(200).json(response.data)
        : res.status(400).send("The shelter is empty!")
    })
}
const adoptCurrentDog = (req, res, next) => {
    adopted.push(req.body.dog);
    res.status(200).json(adopted);
}
const abandonDog = (req, res, next) => {
    // console.log(adopted)
    // console.log(id)
    // console.log(req.params.id)
    adopted.splice(req.params.id, 1);
    res.status(200).json(adopted);
}

// const emptyPound = (req, res, next) => {
//     poundDogs.splice(0);
//     res.status(200).json(poundDog)
// }
const changeTitle = (req, res, next) => {
    title = req.params.id;
    res.status(200).json(title);
}
const viewAdopted = (req, res, next) => {
    // console.log(adopted);
    res.status(200).json(adopted);
}


module.exports = {
    getDog,
    adoptCurrentDog,
    changeTitle,
    viewAdopted,
    abandonDog,
    // emptyPound
}