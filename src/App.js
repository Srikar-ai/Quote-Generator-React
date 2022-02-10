import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import axios from 'axios';

class App extends Component  {
  constructor(){
    super();
    this.state={advice:''}
  }
  componentDidMount(){
    console.log("Component Mounted");
    this.fetchthedata();
    }
  fetchthedata=()=>{
    axios.get('	https://api.adviceslip.com/advice')
    .then(data=>{
      console.log(data.data.slip.advice);
      this.setState({advice:data.data.slip.advice})
    })
    .catch(error=>console.log(error))
  }



  render(){
    console.log('rendered');
  return (
    <div className="App">
        <div className='card'>  
            <h1>{this.state.advice}</h1>
            <button onClick={this.fetchthedata}>Click me</button>
        </div>
    </div>  
  );
  }
}

export default App;
