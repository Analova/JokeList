import React, { Component } from "react";
import Joke from "./Joke";
import axios from "axios";
import uuid from "uuid/v4";
import "./JokeList.css";

class JokeList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="JokeList">JokeList</div>;
  }
}
export default JokeList;
