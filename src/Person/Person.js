/*import React from 'react';


const person = (props) => {
return <p> I am {props.name} and my age is {props.age}</p>
}

export default person;*/
import React, {Component} from 'react';

class Person extends Component{
    render(){
        return(
            <div className="Person">
                <p onClick={this.props.click}>I am {this.props.name} and my age is {this.props.age}</p>
                <p>{this.props.children} </p>
                <input type="text" id="props" onChange={this.props.changeHandlerRef} name={this.props.name}/>
            </div>
        );
    }
}

export default Person;