import React, { Component } from "react";
import Joke from "./Joke";
import axios from "axios";
import uuid from "uuid/v4";
import "./JokeList.css";

class JokeList extends Component {
  static defaultProps = {
    jokesToGet: 10
  };
  constructor(props) {
    super(props);
    this.state = {
      jokes: []
    };
  }
  async componentDidMount() {
    let jokes = [];
    while (jokes.length < this.props.jokesToGet) {
      const res = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" }
      });
      jokes.push(res.data.joke);
    }
    this.setState({
      jokes: jokes
    });
    console.log(jokes);
  }

  render() {
    return (
      <div className="JokeList">
        <h1>Dad jokes</h1>
        <div className="JokeList-joke">
          {this.state.jokes.map(j => (
            <div>{j}</div>
          ))}
        </div>
      </div>
    );
  }
}
export default JokeList;
