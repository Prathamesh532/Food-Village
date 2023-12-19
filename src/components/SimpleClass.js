import React from "react";

class SimpleClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    console.log(this.props.name + "Contructor");
  }

  componentDidMount() {
    console.log(this.props.name + "ComponentDidMount");
  }

  render() {
    const { count } = this.state;
    console.log(this.props.name + "Render");

    const handleClick = () => {
      this.setState({
        count: count + 1,
      });
    };

    return (
      <div>
        <h1>{this.props.name}</h1>
        <h1>{count}</h1>
        <button onClick={handleClick}>Click to Add</button>
      </div>
    );
  }
}

export default SimpleClass;
