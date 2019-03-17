import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addCounter} from '../redux/action/action'

class AddCounter extends Component {

       addHandler = () =>{
           console.log('add handler call from component');
           
           let data = "dummy"
           this.props.addCounter(data);
       }

    render() {
        return (
            <div>
                
                <button onClick={this.addHandler}>
                    ADD
                </button>
                
            </div>
        )
    }
}

export default connect(null, {
    addCounter
})(AddCounter)