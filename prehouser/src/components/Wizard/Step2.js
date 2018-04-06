import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Step2 extends Component {
    constructor(props) {
        super(props);
        this.state = { url: '' }
    }

    // handleImgURL(e){
    //     this.setState({url:e.target.value})
    // }

    render() { 
        return ( <div>
            <h2>Image Url</h2>
            <input  value={this.state.value}/>

            <div>
                <Link to="/Wizard/step1"><button>Previous Step</button></Link>
                <Link to="/Wizard/step3"><button>Next Step</button></Link>
                
            </div>

        </div> )
    }
}
 
export default Step2;