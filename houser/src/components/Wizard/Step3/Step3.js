import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {updateMortgage, updateRent} from '../../../ducks/reducer';


class Step3 extends Component {
    constructor(props) {
        super(props);
        this.state = { mortgage: '', rent: '', redirect:false }
    }
    submit(e){
        let {name, address, city, stateName, zip, img, mortgage, rent} = this.props;
        let body = {
            name:name,
            address:address,
            city:city,
            state:stateName,
            zip:zip, 
            img:img, 
            mortgage:mortgage, 
            rent:rent
        }
        console.log(body)
        axios.post(`/api/listing`, {body})
        .then( response => console.log(response) );
        this.setState({redirect:true})
    }
    updateMortgage(input){
        this.setState( {mortgage : input } )
      }
    
      updateRent(input){
        this.setState( {rent : input } )
      }

    render() { 
        return ( 
        <div>
            <p>Suggested Payment: {this.props.mortgage * 1.25}</p>

            <input value={this.props.mortgage} onChange={ (e)=>this.props.updateMortgage(e.target.value) }  />
            <input value={this.props.rent} onChange={ (e)=>this.props.updateRent(e.target.value) }  />

            <div>
                <Link to="/Wizard/2"><button>Previous Step </button></Link>
                <button onClick={() => this.submit()}>Complete </button>
            </div>
            
        </div> )
    }
}
 
function mapStateToProps(state){
    return {
        name: state.name,
        address: state.address,
        city: state.city,
        stateName: state.stateName,
        zip: state.zip,
        img: state.img,
        mortgage: state.mortgage,
        rent: state.rent,
        listings: state.listings
    }
}

export default connect(mapStateToProps, {updateMortgage, updateRent})(Step3);