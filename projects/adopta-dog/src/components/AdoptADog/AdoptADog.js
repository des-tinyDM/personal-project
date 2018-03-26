import React, {Component} from 'react';
import axios from 'axios';
import swal from 'sweetalert2';
import './AdoptADog.css';
import AdoptedList from '../AdoptedList/AdoptedList'


class AdoptADog extends Component {
    constructor(){
        super();

        this.state = {
            dog: '',
            name:'',
            adoptedDogs: [],
            poundDogs: []
        }
        this.adoptThisDog = this.adoptThisDog.bind(this);
        this.abandonDog = this.abandonDog.bind(this);
        this.nameDog = this.nameDog.bind(this)
        
    }
    componentDidMount() {
    this.getDog();
    // this.abandonDog();
    // this.nameDog = this.nameDog();    
    }

    getDog(){
        axios
        .get("/api/dogs/random")
        .then(response => {
            this.setState( {dog : response.data.message});
        })
    }
    // Add current dog to adopted dogs
    adoptThisDog(){
        let {dog, adoptedDogs} = this.state;
        if (JSON.stringify(adoptedDogs).includes(JSON.stringify(dog))) {
            swal("", "You already own this doggo!", "error");
            console.log(adoptedDogs);
          } else {
        axios.post("/api/dogs/", {dog: this.state.dog})
        .then(response => this.setState({ adoptedDogs:response.data}))
        .catch(error=> console.log(error));
        this.getDog();
          }
    }
  
    abandonDog(id) {
        axios
          .delete(`/api/dogs/${id}`)
          .then(response => this.setState({ adoptedDogs: response.data }))
          .catch(error => console.log(error));
      }
    
    nameDog(id, name){
        axios.put(`/api/dogs/named/${id}`, {name: name}).
        then(response => {

            response.data != "undefined"
        ? this.setState({adoptedDogs: response.data})
        : this.setState({adoptedDogs:this.state.adoptedDogs})
    })
}

    render() {
        const {dog, adoptedDogs} = this.state;
        return (
            <div className="">
                <div className="dog-container">
                    <img className="adoptable-dog" src={dog} alt="Dog pic. Will you adopt or pass on this pup?"/>
                    <div className="btn-div">
                        <button className="adopt-btn btn" onClick={()=>this.adoptThisDog()}>
                            <p>Adopt Me!
                        </p></button>
                        <button className="kick-btn btn" onClick={()=>this.getDog()}>
                            <p>Kick Dog</p>
                        </button>
                    </div>
                </div>
                <AdoptedList adoptedDogs={this.state.adoptedDogs} abandonDog={this.abandonDog} nameDog={this.nameDog}/>
            </div>
        )
    }
}
export default AdoptADog;