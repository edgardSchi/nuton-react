import React from "react";
import '../index.css'
import {Button} from 'react-bootstrap'
const download = require('downloadjs');

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

  handleDownload = () => {
    var path = this.props.version.path;
    var res = fetch(`/download/${path}`)
    .then((res) => res.blob())
    .then(blob => {
      download(blob, "Nuton_" + this.props.version.versionNumber + ".jar", "application/java-archive");
      // const url = window.URL.createObjectURL(new Blob([blob]));
      // const link = document.createElement('a');
      // link.href = url;
      // link.setAttribute('download', "Nuton_" + this.props.version.versionNumber + ".jar");
      // document.body.appendChild(link);

      // link.click();

      // link.parentNode.removeChild(link);
    })
    .catch(err => console.log(err));
    console.log(res);
  }

  render() {
    
    const added = this.props.version.added.map(function(val, index) {
        return <li key={index}>{val}</li>
    });

    const fixed = this.props.version.fixed.map(function(val, index) {
        return <li key={index}>{val}</li>
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
            <Button bsPrefix="red-btn" onClick={this.handleDownload}>Herunterladen</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Version