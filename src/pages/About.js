import React from "react";
import SimpleClass from "../components/SimpleClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props)

    console.log("Parent Constructor");
  }

  componentDidMount(){
    console.log("Parnet componetDidMount");
  }
  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About us Page</h1>
        <SimpleClass name={"First Components"} />
        <SimpleClass name={"second Components"} />
      </div>
    );
  }
}

export default About;
