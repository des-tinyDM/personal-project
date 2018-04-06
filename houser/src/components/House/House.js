import React from 'react';
import './House.css'

const House = props => {
    return (
    <div>
        <div className="image-box" >
            <img className="prop-image" src={props.img}/>
        </div>
        <div>
            {props.name}
            {props.address}
            {props.city}
            {props.state}
            {props.zip}
        </div>
        <div>
            {props.mortgage}
            {props.rent}
        </div>
        <div> <button onClick={ () => props.removeListing(props.id)} className="remove-listing-btn"> Remove Listing </button> </div>
    </div>
    )
}

export default House;