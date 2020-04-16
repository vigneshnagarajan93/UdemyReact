import React,{Component} from 'react';
//import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import Person from './Person/Person.js'
import './Person/Person.css'

class App extends Component {
  state={
    persons:[
      {name:"Test 1",age:"12"},
      {name:"Test 2",age:"34"}
    ]
  }
  switchHandler = (newName) => {
    this.setState({
        persons:[
          {name:newName,age:"12"},
          {name:"Test 2",age:"34"},
        ]
    })
  }
  nameChangedHandler = (event)=>{
    this.setState({
      persons:[
        {name:event.target.value,age:"12"},
        {name:"Test 2",age:"34"},
      ]
  })
  }
  render(){
    const buttonStyle={
      backgroundColor:'#CCC',
      font:'inherit',
      border:'1px solid white',
      padding:'8px',
      cursor:'pointer'
    }
    return(
      <div>
        <h1>Xample</h1>
        <button style={buttonStyle} onClick={this.switchHandler.bind(this,'New name')}>Switch names</button>
        <Person name={this.state.persons[0].name} changeHandlerRef={this.nameChangedHandler}click={this.switchHandler} age={this.state.persons[0].age}></Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
      </div>
    );
  }
}


export default App;
/*
const App = props =>{
  const [personsState,setPersonsState]=useState({
    persons:[
      {name:"Test 1",age:"12"},
      {name:"Test 2",age:"34"}
    ]
  }
  );
  return(
    <div>
      <h1>Xample</h1>
      
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}></Person>
      <Person name={personsState.persons[1].name} click= age={personsState.persons[1].age}></Person>
    </div>
  );
}

export default App;*/