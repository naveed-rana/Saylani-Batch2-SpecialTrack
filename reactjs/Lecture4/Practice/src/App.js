import React, { Component } from 'react'
import Header from './components/header'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Main from './components/MainSection'
import {BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends Component {

  
  render() {
    return (



       <Router>
      <div>
         <Header />
         <Navigation />
         <Main/>
         <Footer />
      </div>
      </Router>
    

     
    )
  }
}
