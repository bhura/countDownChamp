import React, { Component } from 'react';
import Clock from './clock.jsx';
import './App.css';
import {Form, FormControl, Button} from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      deadline:'December 25, 2017',
      newDeadline:'',
      counter:0
    }
  }
  changeDeadline(){
    this.setState({ deadline: this.state.newDeadline})
  }
  render(){
    return(
      <div className="App">
        <div className='App-title'>Countdown to {this.state.deadline}</div>
          <Clock
            deadline = {this.state.deadline}
          />
        <Form inline >
          <FormControl
            className="deadline-input"
            onChange={event => this.setState({newDeadline: event.target.value})}
            placeholder="New Date"
          />
        <Button bsStyle="primary" onClick={()=>this.changeDeadline()}>Submit</Button>
        </Form>
      </div>
    )
  }
}
export default App;
