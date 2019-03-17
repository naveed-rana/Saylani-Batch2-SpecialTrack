import React, { Component } from "react";
import axios from "axios";

export default class GithubUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      loader: false
    };
  }

  generateRequest = () => {
    this.setState({ loader: true });

    let url = `https://api.github.com/users/naveed-rana`;
    axios
      .get(url)
      .then(res => {
        console.log(res.data);

        this.setState({
          user: res.data,
          loader: false
        });
      })
      .catch(err => {
        this.setState({
          loader: false
        });

        console.error(err);
      });
  };

  render() {
    return (
      <div>
        {this.state.loader ? (
          <button>loading ...</button>
        ) : (
          <button onClick={this.generateRequest}>Get User request</button>
        )}

        <p>github user name: {this.state.user.login}</p>

        {/* so on */}
      </div>
    );
  }
}
