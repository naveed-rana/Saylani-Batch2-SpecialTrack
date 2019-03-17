import React, { Component } from 'react'
import {Route,Switch } from 'react-router-dom';
import Section from './Section';
import User from './User';
import NotFound from './NotFound';
import Login from './Login';
import {PrivateRoute} from './privateRoute'; 
import Admin from './Admin';

export default class Main extends Component {
  
    constructor(props) {
        super(props)
        this.state = {
            status:false
        }
    }
    
    render() {
         const {status} =this.state; 
        return (

            <div>
             <Switch>
              <Route exact path='/' component={Section}/>
              <Route  path='/login' component={Login}/>
              {/* <Route path='/user' component={User}/>
              <Route path='/admin' component={Admin}/> */}
              
 
              <PrivateRoute path='/user' component={User} Auth={status} />
              <PrivateRoute path='/admin' component={Admin} Auth={status} />

              <Route  component={NotFound}/>
              </Switch>
            </div>
        )
    }
}
