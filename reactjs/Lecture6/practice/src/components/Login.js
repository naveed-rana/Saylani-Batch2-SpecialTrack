import React, { Component } from 'react'

export default class Login extends Component {

    
    Login = () =>{

        this.props.history.push('/user');
    }

    
     
    render() {
        return (
            <div>
        
                <button onClick={this.Login}>
                    Login
                </button>
                
            </div>
        )
    }
}
