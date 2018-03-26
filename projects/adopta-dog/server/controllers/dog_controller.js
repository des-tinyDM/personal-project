const axios = require('axios');
const baseurl = "https://dog.ceo/api/breeds/image/random";

//nodb, so store data here!
let adopted = [];
let poundDogs = [];
let title = "Destiny's Dogs";

//data requests received here! Server returns info or a 404 error, with custom message.
let id = 1
const getDog = (req, res, next) => {
    axios.get(baseurl).then(response => {
        console.log(response.data)
        response.data
        ? res.status(200).json(response.data)
        : res.status(400).send("The shelter is empty!")
    })
}
const adoptCurrentDog = (req, res, next) => {

    adopted.push({id, img:req.body.dog});
    id++
    res.status(200).json(adopted);
}
const abandonDog = (req, res, next) => {
    
    adopted.splice(req.params.id, 1);
    res.status(200).json(adopted);
}
const kickCurrentDog = (req, res, next) => {
    poundDogs.push(req.body.dog);
    res.status(200).json(poundDogs);
    console.log(poundDogs);
}

const changeTitle = (req, res, next) => {
    title = req.params.id;
    res.status(200).json(title);
}
const viewAdopted = (req, res, next) => {
    // console.log(adopted);
    res.status(200).json(adopted);
}
const namedog = (req, res, next) => {
    // console.log(req.params.id) 
    // console.log(req.body.name)
    console.log(req.body, req.params.id) 
    let doggo = adopted.find(c=>c.id === Number(req.params.id))
    doggo.name = req.body.name;
    return res.status(200).json(adopted)
}
const emptyPound = (req,res,next) => {
    // poundDogs
}

module.exports = {
    getDog,
    adoptCurrentDog,
    changeTitle,
    viewAdopted,
    abandonDog,
    kickCurrentDog,
    namedog
}