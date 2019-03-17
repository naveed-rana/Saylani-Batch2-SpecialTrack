import React, { Component } from 'react';
import {decreementCounter,startReset} from '../redux/action/action';
import {connect} from 'react-redux';

class Decress extends Component {

    handle = () => {
        this.props.decreementCounter();
    }

    render() {
        return (
            <div>
                <button onClick={this.handle}>dec</button> 

                <button onClick={()=> this.props.startReset()}>Reset</button> 

            </div>
        )
    }
}
export default connect(null, {
    decreementCounter,
    startReset
})( Decress)