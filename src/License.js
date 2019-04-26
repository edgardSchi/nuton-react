import React from "react";
import './index.css'

const divStyle = {
    padding: '5%',
    fontSize: '10px',
    height: "80vh"
}

const licenseDivStyle = {
    color: 'black',
    borderStyle: 'solid',
    borderColor: '#e2e2e2',
    backgroundColor: '#e2e2e2',
    borderRadius: '3px',
    padding: '1%'
}

class License extends React.Component {
  render() {
    return (
      <div style={divStyle} className="main-div">
        <h1>Lizenz</h1>
        <h3>Nuton ist unter GPLv3 lizensiert.</h3>
        <div style={licenseDivStyle}>
        <p>Nuton</p>  
        <p>Copyright (C) 2018-2019 Edgard Schiebelbein</p>
        <p> This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.</p>
        <p>This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.</p>
        <p>You should have received a copy of the GNU General Public License along with this program.  If not, see <a href="http://www.gnu.org/licenses/">http://www.gnu.org/licenses/</a>.</p>
        </div>
      </div>
    );
  }
}

export default License


{/* <p>Nuton</p>
<p>Copyright (C) 2018-2019 Edgard Schiebelbein</p>

<p> This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.</p>

<p>This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.</p>

<p>You should have received a copy of the GNU General Public License along with this program.  If not, see <http://www.gnu.org/licenses/>.</p> */}
