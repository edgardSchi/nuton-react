import React from "react";
import { Button } from "react-bootstrap";
import "./index.css";
import Changelog from './components/Changelog.js';
import {withRouter} from 'react-router-dom'

const divStyle = {
  width: "100%",
  height: "100%",
  background: "#202d3a",
  color: "#e2e2e2",
  padding: "0",
  margin: "0",
  paddingBottom: "20px"
  //textAlign: "center"
};

const subTitleStyle = {
  borderBottom: "solid #e2e2e2",
  marginTop: "25px"
};

const titleStyle = {
  marginBottom: "-5px"
};

const subDivStyle = {
  background: "#2c3e50",
  marginTop: "10px",
  paddingBottom: "1px"
};

const btnDivStyle = {
  textAlign: "center",
  paddingTop: "10px"
};

const textDivStyle = {
  paddingLeft: "15px",
  paddingRight: "15px",
  color: "#e2e2e2"
};

class Download extends React.Component {

    //Test data for version API
    state = {
        version: [
            {
                id: 1,
                versionNumber: "1.0",
                date: "12.06.2018",
                added: ["Dies", "Das"],
                fixed: ["Alles", "nix"],
                path: ""
            },
            {
                id: 2,
                versionNumber: "1.1",
                date: "13.06.2018",
                added: ["Das", "Dies"],
                fixed: ["Nix", "Alles"],
                path: ""
            }
        ]
    } 

  render() {
    return (
      <div style={divStyle}>
        <div style={{ textAlign: "center" }}>
          <Button variant="danger" size="lg" bsPrefix="download-btn">
            Herunterladen
          </Button>
          <h6>Version 1.2</h6>
        </div>
        <div
          style={{
            paddingLeft: "10%",
            paddingRight: "10%",
            paddingTop: "30px"
          }}
        >
          <div style={subTitleStyle}>
            <h3 style={titleStyle}>Git</h3>
          </div>
          <div style={subDivStyle}>
            <div style={btnDivStyle}>
              <Button bsPrefix="red-btn">Quellcode herunterladen</Button>
            </div>
            <div style={textDivStyle}>
              <h6
                style={{
                  marginBottom: "-1px"
                }}
              >
                Das Git-Repository kann mit folgendem Befehl heruntergeladen
                werden:
              </h6>
              <pre className="git-command">
                git clone https://github.com/edgardSchi/nuton.git
              </pre>
            </div>
          </div>
          <div style={subTitleStyle}>
            <h3 style={titleStyle}>Versionen</h3>
          </div>
          <Changelog version={ this.state.version }/>
        </div>
      </div>
    );
  }
}

export default Download
