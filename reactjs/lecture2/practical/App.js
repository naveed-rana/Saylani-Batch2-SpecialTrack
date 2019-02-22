import React, { Component } from 'react';
import './App.css';
// import Header from './components/Header' 


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      height: 0,
      haircolor: "",
      counter: 0,
      submit: false,
      data:[{
        name: 'Ramish',
        height: 5.8,
        haircolor: "black",
      },{
        name: 'ghf',
        height: 5.8,
        haircolor: "black",
      }]
    }
    console.log("This is constructor method")
  }
  componentDidMount(){
    console.log("component did mount")

  }
  componentWillMount(){
    console.log("component will mount")
  }

 



  eventHandler = () => {
    this.setState( (oldState)=> {
      return {counter: oldState.counter + 1}
      }
    )
  }
  decrease =()=>{
    this.setState( decreasing =>{
      return {counter: decreasing.counter-1}
    }  
    )
  }
  // reset = ()=>{
  //   this.setState( reset=>{
  //     return{resetes:reset.counter=0}
  //   })
  // }
  reset=()=> {
    this.setState({counter: 0})

    // this.setState( reset=>{
    //   return{counter:0}
    // }
    
  }

  onChangeHandler = (event)=>{
    // event.target.value
    console.log( event.target.value)
    console.log( event.target.name)
    var name = event.target.name;
    var value = event.target.value;
    this.setState(
      {[name]: value}
      )
  }
  
  submitHandler = ( ) =>{

    var prevData = this.state.data;
    
    prevData.push({
        name: this.state.name,
        height: this.state.height,
        haircolor: this.state.haircolor,
    })

    this.setState({
      data:prevData
    })

  }

  // onchangehair=(www)=>{
    
  //   this.setState({haircolor: www.target.value})
  // }


  render() {
    console.log("This is render method")
    return (
      <div className="App">
        {/* <p>Counter: {this.state.counter}</p>
        <p>Name: {this.state.name}</p>
        <p>Height: {this.state.Height}</p>

        <p>Haircolor: {this.state.haircolor}</p>
        <button onClick={this.eventHandler}>Increase</button>
        <button onClick={this.decrease}>Decrease</button>
        <button onClick={this.reset}>Reset</button>
         */}
        
        <input type="text" onChange={this.onChangeHandler} name='name' placeholder="username"/>
        <input type="text" onChange={this.onChangeHandler} name='haircolor' placeholder="Hair color"/>
        <input type="text" onChange={this.onChangeHandler} name='height' />
        
         {/* condition ? exprTrue : exprFalse */}
      {/* {
        
        this.state.submit ? 
        <p>Submit is true</p>:
        <p>Submit is False</p>
        } */}

        <button onClick={this.submitHandler}>Submit</button>
         

         <p>Data show</p>

         {this.state.data.map((dataProp,index)=>{

            return(
              <div key={index}>
                <p>.............start of {index}...............</p>
                <p>Name:{dataProp.name}</p>
                <p>height:{dataProp.height}</p>
                <p>haircolor:{dataProp.haircolor}</p>
                <p>............................</p>
              </div>
            )
         })}
      </div>
    );
  }
}

export default App;
