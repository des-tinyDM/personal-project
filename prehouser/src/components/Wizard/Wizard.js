import React, {Component} from 'react';
import './Wizard.css';
import axios from 'axios';

import {Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

class Wizard extends Component {
    constructor(){
        super();
        this.state = { 
            name: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        }
       
    }

    render() {
        return(
            <div className="wizard">
                    <div className="form">
                        <section className="wizard-header">
                                <h1> Add New Property </h1> 
                                <Link to="/" ><button className="cancel-btn"> Cancel </button></Link>
                        </section>
                        <Switch>
                            <Route exact path="/Wizard/step1" component={Step1} />
                            <Route exact path="/Wizard/step2" component={Step2} />
                            <Route exact path="/Wizard/step3" component={Step3} />
                        </Switch>
                    </div>
            </div>
        )
    }
}
export default Wizard;