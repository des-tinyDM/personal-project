import React, { Component } from 'react';
import './Dashboard.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

import House from '../House/House';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { listings: [] }
        this.getListings = this.getListings.bind(this);
        this.removeListing = this.removeListing.bind(this);
    }

    componentDidMount(){
        this.getListings();
    }
    getListings(){
        axios.get(`/api/listings`)
        .then(results => this.setState({listings:results.data}) );
    }
    removeListing(id){
        axios.delete(`/api/listing/${id}`)
        .then( response => {
            console.log(`Deleted house ${id}.`) });
        this.getListings();
    }

    render() { 
        let {listings} = this.state;
        let houseList = listings.map( (e, i) => {
            return <House 
                key={i}
                id={e.id}
                name={e.name}
                address={e.address}
                city={e.city}
                state={e.state}
                zip={e.zip}
                img={e.img}
                mortgage={e.mortgage}
                rent={e.rent}
                removeListing={this.removeListing}

            />
        })

        return ( 
        <div> 
            <h1> Dashboard </h1>
            
            {houseList}

            <Link to="/Wizard/1" ><button> Add New Property </button> </Link>
        </div> )
    }
}
 
export default Dashboard;