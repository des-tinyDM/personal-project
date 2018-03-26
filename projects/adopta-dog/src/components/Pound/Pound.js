import React, {Component} from 'react';

class Pound extends Component {
    constructor(props){
        super(props)
        this.state = {
            poundDogs: [],
            name: '',
            title: "The Pound"
            };
            
        }
        
    componentDidMount(){
        emptyPound();
    }

    emptyPound(){
        this.state({poundDogs:[]})
    }
    render(){
        return (
            <div>
                <button>EMPTY THE POUND</button>    
                
            </div>
        )
    }
}