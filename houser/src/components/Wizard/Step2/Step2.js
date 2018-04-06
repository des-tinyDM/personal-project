import React, { Component } from 'react';

import {connect} from 'react-redux';
import {updateImg} from '../../../ducks/reducer';
import {Link} from 'react-router-dom';

class Step2 extends Component {
    constructor(props) {
        super(props);
        this.state = { url: '' }

    }

    render() { 
        const {updateImg} = this.props;
        return ( 
        <div>
            <p> Property Image URL </p>
            <input onChange={ (e)=> updateImg(e.target.value)}/>
            <div>
                <Link to="/Wizard/1"><button className="submit-btn">Back</button></Link>
                <Link to="/Wizard/3"><button className="submit-btn">Next</button></Link></div>
        </div> )
    }
}

function mapStateToProps(state){
    const {img} = state;

    return {img};
}
 


export default connect(mapStateToProps, {updateImg})(Step2);