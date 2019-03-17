import React, { Component } from "react";
import Header from "./components/header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Main from "./components/MainSection";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./components/counter";
import Addcounter from "./components/Addcounter";
import Decress from "./components/decress";

import GithubUser from "./components/gitHubUser";

import { Provider } from "react-redux";
import store from "./redux/store/store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <Router>
      <div>
         <Header />
         <Navigation />
         <Main/>
         <Footer />
      </div>
      </Router> */}
        {/* <Addcounter />
      <Decress />
      <Counter /> */}

        <GithubUser />
        

      </Provider>
    );
  }
}
