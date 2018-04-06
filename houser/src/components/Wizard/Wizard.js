import React, { Component } from 'react';
import {Switch , Route} from 'react-router-dom'

import './Wizard.css'

import Step1 from './Step1/Step1';
import Step2 from './Step2/Step2';
import Step3 from './Step3/Step3';
import Reset from '../buttons/Reset';

import {Link} from 'react-router-dom'

class Wizard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div className="wizard">
            <section className="wiz-head">
                <h1>Add Property</h1>
                <Link to="/"><Reset /></Link>
            </section>
            <div>
                <Switch>
                    <Route path="/Wizard/1" component={Step1}/>
                    <Route path="/Wizard/2" component={Step2}/>
                    <Route path="/Wizard/3" component={Step3}/>
                </Switch>

            </div>
        </div> )
    }
}
 
export default Wizard;