import React from "react";
import './index.js'
const ReactMarkdown = require("react-markdown");

class GettingStarted extends React.Component {

    state = {
        text: ""
    }

    componentDidMount() {
        fetch("https://raw.githubusercontent.com/edgardSchi/nuton/master/README.md")
        .then(response => response.text()).then(result => this.setState({text: result}))
        .catch(this.setState({text: "Es konnte keine Verbindung zu GitHub hergestellt werden."}));
    }

  render() {
    console.log(this.state.text);
    return (
      <div style={{ paddingLeft: "5%", paddingRight: "5%", height: '90vh' }}>
        <ReactMarkdown source={this.state.text} />
      </div>
    );
  }
}

export default GettingStarted;
