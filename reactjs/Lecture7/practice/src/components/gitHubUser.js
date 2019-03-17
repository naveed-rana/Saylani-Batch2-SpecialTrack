import React, { Component } from "react";
import axios from "axios";
import {connect} from 'react-redux';
import {getGetHubUser} from '../redux/action/githubUser';

class GithubUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      loader: false,
      name:'',
    };
  }

  generateRequest = () => {
     
   this.props.getGetHubUser(this.state.name);
    
  };

  onChangeHandler =(e)=>{
    console.log('search value',e.target.value);
    
    this.setState({name:e.target.value})
  }

  render() {
    return (
      <div>
     

          <input
           type="text"
           name="name" placeholder="enter user name"
           onChange={this.onChangeHandler}

           />
          <button onClick={this.generateRequest}>Search</button>
       

        <p>github user name: {this.props.user.login}</p>

        <p>github company : {this.props.user.company}</p>

        {/* so on */}
      </div>
    );
  }
}

const mapStateToProps = (store) =>{
      console.log('store',store);
      
  return {
    user:store.user.githUser
  }
}

export default connect(mapStateToProps, {getGetHubUser})(GithubUser)