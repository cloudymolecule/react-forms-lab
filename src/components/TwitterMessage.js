import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  handleCounter = () => {
    let counter = this.props.maxChars - this.state.message.length
    return counter
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message}/>
        <br></br>
        <h1>{this.handleCounter()}</h1>
      </div>
    );
  }
}

export default TwitterMessage;
