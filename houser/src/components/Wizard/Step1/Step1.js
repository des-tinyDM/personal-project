import React, { Component } from 'react';

import {Link} from 'react-router-dom'

import '../Wizard.css'

import {connect} from 'react-redux';
import {updateName, updateAddress, updateCity, updateState, updateZip} from '../../../ducks/reducer';
import axios from 'axios';


class Step1 extends Component {
    constructor(props) {
        super(props);
        this.removeListing = this.removeListing.bind(this)
    }
    
    // handleName(input){
    //     console.log(input)
    //     this.setState({name:input})
    // }
    // handleAddress(input){
    //     console.log(input);
    //     this.setState({address:input});
    // }
    // handleCity(input){
    //     this.setState({city:input});
    //     console.log(input);
    // }
    // handleState(input){
    //     this.setState({stateName:input});
    //     console.log(input)
    // }
    // handleZip(input){
    //     this.setState({zip:input})
    //     console.log(input)
    // }

    removeListing(id){
        axios.delete(`/api/listing/${id}`)
        .then( response => {
            console.log(`Deleted house ${id}.`) });
        // this.getListings();
    }

    render() { 
        const {updateName, updateAddress, updateCity, updateState, updateZip} = this.props;
        
        return ( 
        <div>
            <p>Property Name</p>
            <input onChange={(e)=>updateName(e.target.value)}/>
            <p>Property Address</p>
            <input onChange={(e)=>updateAddress(e.target.value)}/>
            <div className="city-state"> 
                <div>
                    <p>City</p>
                    <input onChange={(e)=>updateCity(e.target.value)}/>
                </div>
                <div>
                    <p>State</p>
                    <input onChange={(e)=>updateState(e.target.value)}/>
                </div>
            </div>
            <p>Zipcode</p>
            <input onChange={(e)=>updateZip(e.target.value)}/>

            <div>
                <Link to="/Wizard/2"><button className="submit-btn">Next</button></Link>          
            </div>
        </div> )
    }
}
 
function mapStateToProps(state){
    const {name, address, city, stateName, zip} = state;

    return {
        name, address, city, stateName, zip
    };
}

export default connect(mapStateToProps, {updateName, updateAddress, updateCity, updateState, updateZip} )(Step1);