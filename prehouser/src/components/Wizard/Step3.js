import React, { Component } from 'react';
import axios from 'axios';

import {Link} from 'react-router-dom';

class Step3 extends Component {
    constructor(props) {
        super(props);
        this.state = {mortage:0,rent:0 }


        this.submit = this.submit.bind(this);
        this.handleMortage = this.handleMortage.bind(this);
        this.handleRent = this.handleRent.bind(this);
    }

    handleMortage(e){
        this.setState({mortage:e.target.value})
    }

    handleRent(e){
        this.setState({rent:e.target.value})
    }

    submit(e){
        axios.post(`/api/listing`, {name:this.state.name, address:this.state.address, city:this.state.city, state:this.state.state, zip:this.state.zip})
        .then( response => console.log(response) );
    }

    render() { 
        return ( 
        <div>
            <p>Reccomended Rent: ${this.state.mortgage * 1.25} </p>

            <input onClick={this.handleMortage} value={this.state.value} /> 
            <input onClick={this.handleRent} value={this.state.value} />

            <div>
                <Link to="/Wizard/step2"><button>Previous Step </button></Link>
                <button onClick={this.submit}>Complete </button>
            </div>
        </div> 
        )
    }
}
 
export default Step3;