import React from 'react';
import './House.css';

const House = props => {
    return (
        <div className="listing-info">
            <p className="desc" >Property Name: {props.name}</p>
            <p className="desc">Property Address: {props.address}</p>
            <p className="desc"> City: {props.city}</p>
            <p className="desc">State: {props.state}</p>
            <p className="desc">Zip: {props.zip}</p>
            <div> <button onClick={ () => props.removeListing(props.id)} className="remove-listing-btn"> Remove Listing </button> </div>
        </div>
    )
}
export default House;