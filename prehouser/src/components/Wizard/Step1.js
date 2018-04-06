import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Step1 extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        } 
        this.handleName = this.handleName.bind(this);
        this.handleAddress = this.handleAddress.bind(this);
        this.handleCity = this.handleCity.bind(this);
        this.handleState = this.handleState.bind(this);
        this.handleZip = this.handleZip.bind(this);
    }
    handleName(e){
        this.setState({name:e.target.value})
        console.log(e.target.value);
    }
    handleAddress(e){
        this.setState({address:e.target.value});
    }
    handleCity(e){
        this.setState({city:e.target.value});
    }
    handleState(e){
        this.setState({city:e.target.value});
    }
    handleZip(e){
        this.setState({zip:e.target.value});
    }
    
    render() { 
        return (
        <div>
            <form className="form">
                <section className="wizard-header">
                        <h1> Add New Property </h1> 
                        <Link to="/" ><button className="cancel-btn"> Cancel </button></Link>
                </section>
                <section className="form-input">
                    <div className="input-box">
                    <p> Property Name </p>
                    <input className="input" onChange={this.handleName} value={this.state.value}/>
                </div>
                <div className="input-box">
                    <p> Property Address </p>
                    <input className="input" onChange={this.handleAddress} value={this.state.value}/>
                </div>
                <div className="city-state-zip-line">
                    <div className="city-input input">
                        <p>City</p>
                        <input className="input" onChange={this.handleCity} value={this.state.value}/>
                    </div>
                    <div className="state-input input">
                        <p>State</p>
                        <input onChange={this.handleState} value={this.state.value}/>
                    </div>
                    <div className="zip-input input">
                        <p>Zip</p>
                        <input onChange={this.handleZip} value={this.state.value}/>
                    </div>
                </div>
                </section>
                <Link to="/Wizard/step2"><input type="submit" className="submit-btn" value="Next Step"/></Link>
            </form> 
        </div>)
    }
}
 
export default Step1;