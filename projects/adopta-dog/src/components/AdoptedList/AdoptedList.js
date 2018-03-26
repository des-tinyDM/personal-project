import React, {Component} from 'react';
import axios from 'axios';
import swal from 'sweetalert2';
import './AdoptedList.css';

class AdoptedList extends Component {
    constructor(props){
        super(props);

        this.state ={
        adoptedDogs: [],
        name: '',
        title: "Destiny's Doggeroos"
        };
        this.updateTitle = this.updateTitle.bind(this);
        // this.nameDog = this.nameDog.bind(this);
    }
    componentDidMount(){
        axios.get("/api/dogs")
        .then(response => this.setState({adoptedDogs: response.data }))
        .catch(error => console.log(error));
        console.log(this.state.adoptedDogs);
    }
    updateTitle() {
        
        swal({
            text: "Enter new title here:",
            input:"text"
        }).then(result => {
            axios
                .put(`/api/dogs/${result.value}`)
                .then(response =>
                  response.data !== "undefined"
                    ? this.setState({title: response.data})
                    : this.setState({title:this.state.title})
                )
                .catch(error => console.log(error));
        })
    }
    handleNameChange(value){
        this.setState({name:value})
    }
 

    render() {
        // console.log(this.state);
        let viewAdopted = this.props.adoptedDogs.map((e,i) => {
            console.log(e, e.id)
            return (
        
            <div key={i} className="adopted-dogs">
                <button className="abandon-btn" 
                    value={this.state.dog} 
                    onClick={(e) => this.props.abandonDog(i)}>Abandon</button>
                <img className="dogpic" src={e.img}/>
                <div className="dogname">{e.name}</div>
                <div className="adopted-name">
                    <input onChange={(event) => this.handleNameChange(event.target.value) } placeholder="Name:"/>
                    <button
                        onClick={event => this.props.nameDog(e.id, this.state.name)}
                    >
                        Name Dog
                    </button>
                </div>
            </div>

            
        )});
        return (
            <div>
            <div className="title-box" onClick={() => this.updateTitle()}>
                    <div>{this.state.title}</div>
            </div>
                <div className="container">
                {viewAdopted}
                </div>
            </div>
        )
    }  
}

export default AdoptedList;