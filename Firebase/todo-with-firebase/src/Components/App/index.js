import React, { Component } from 'react';
import 'typeface-roboto/index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import UltimateToDoApp from '../navigation'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { styles } from "./style";

import { addToDo } from '../Redux/actions/AddToDoActions'

//Main App Component and Setup React Toastify

class App extends Component {

  componentDidMount() {
    // this.props.loadTodo();
  }

  addHandler = () =>{
    this.props.addToDo();
  }

  render() {
    
    return (
      <div>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />

        <UltimateToDoApp />
        <button onClick={this.addHandler}> add d</button>

      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

//
// conect function has 2 parameters first for use of State data from store and second for invoke action function in actions file
//
export default connect(null, { addToDo })(withStyles(styles)(App));