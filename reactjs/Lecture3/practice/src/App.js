import React, { Component } from 'react'
import Header from './components/header'
import TableShow from './components/tableShow'
import FormInputs from './components/formsInput'
import { doesNotThrow } from 'assert';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      products:[{
        name:'Mobile',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cumque in sapiente sed libero laboriosam perspiciatis ut beatae incidunt, dolores, fugiat temporibus eum aperiam? Atque distinctio error qui voluptas accusamus?',
        price:'54554 Rs.'
      },
      {
        name:'Laptop',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cumque in sapiente sed libero laboriosam perspiciatis ut beatae incidunt, dolores, fugiat temporibus eum aperiam? Atque distinctio error qui voluptas accusamus?',
        price:'1205 Rs.'
      }
    ]
    }
  }
  

  deleteHandler = (data) => {
      let newProducts = this.state.products.filter((item)=> item.price != data );

      this.setState({products:newProducts});
  }

  render() {
    return (
      <div>
        
        <Header />
        <FormInputs />
        <TableShow data={this.state.products} deleteHandler={this.deleteHandler}/>
      </div>
    )
  }
}
