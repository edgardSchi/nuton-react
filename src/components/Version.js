import React from "react";
import '../index.css'
import {Button} from 'react-bootstrap'

const textDivStyle = {
  paddingLeft: "15px",
  paddingRight: "15px",
  color: "#e2e2e2"
};

const subDivStyle = {
    background: "#2c3e50",
    marginTop: "20px",
    marginBottom: "10px",
    paddingBottom: "10px"
  };

const changeDivStyle = {
    color: 'black',
    borderStyle: 'solid',
    borderColor: '#e2e2e2',
    backgroundColor: '#e2e2e2',
    borderRadius: '3px'
}

const btnDivStyle = {
    textAlign: "center",
    paddingTop: "10px"
  };

const ulStyle = {
    listStyleType: 'square',
}

class Version extends React.Component {

  render() {
    const added = this.props.version.added.map(function(val) {
        return <li>{val}</li>
    });

    const fixed = this.props.version.fixed.map(function(val) {
        return <li>{val}</li>
    });
    return (
      <div style={subDivStyle}>
        <div style={textDivStyle}>
          <h4>Version { this.props.version.versionNumber }</h4>
          <h6>Die Version { this.props.version.versionNumber } von Nuton wurde am { this.props.version.date } veröffentlicht.</h6>
          <h6>Version:</h6>
          <div style={changeDivStyle}>
            <h6>Hinzugefügt</h6>
            <ul style={ulStyle}>
                {added}
            </ul>
            <h6>Gefixed</h6>
            <ul style={ulStyle}>
                {fixed}
            </ul>
          </div>
          <div style={btnDivStyle}>
            <Button bsPrefix="red-btn">Herunterladen</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Version