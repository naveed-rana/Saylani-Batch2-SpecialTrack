import React, { Component } from 'react';
import {connect} from 'react-redux';

class Counter extends Component {
    render() {
        return (
            <div>
              <p>name:{this.props.name}</p>
              <p>counter:{this.props.counter}</p>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    console.log('state',store);
    
    return {
       counter : store.counter,
       name : store.name,

    }
}


export default connect(mapStateToProps,null)(Counter)
