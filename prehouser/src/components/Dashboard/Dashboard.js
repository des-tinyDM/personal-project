import React, {Component} from 'react';
import axios from 'axios';
import './Dashboard.css';

import House from '../House/House';
import {Link} from 'react-router-dom';

class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            listings: []
        }
        this.getListings = this.getListings.bind(this);
    }
    componentDidMount(){
        this.getListings();
    }
    getListings(){
        axios.get(`/api/listings`)
        .then(results => this.setState({listings:results.data}) );
    }

    removeListing(house_id){
        axios.delete(`/api/listing/${house_id}`)
        .then( response => {
            console.log(`Deleted house ${house_id}.`) });
        this.getListings();
    }

    render() {
        let {listings} = this.state;
        let houseList = listings.map((e, i) => {
            return (<House 

                    key={i}
                    id={e.house_id}
                    name={e.name}
                    address={e.address}    
                    city={e.city}
                    state={e.state}
                    zip={e.zip} 
                    removeListing={this.removeListing} 
                    getListings={this.getListings}
                    />  
                    )
        })
        return(
            <div className="dash">
                <div className="dash-header">
                    <h1>Dashboard</h1>
                    <Link to="/Wizard/step1" ><button className="go-to-wizard-btn" >Add New Property</button></Link>
                </div>
                <div className="dash-list">
                    {houseList }
                </div>
            </div>
        )
    }
}
export default Dashboard;