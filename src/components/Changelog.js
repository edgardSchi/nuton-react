import React from "react";
import Version from './Version'

class Changelog extends React.Component {

  render() {
      let reverseArray = this.props.version.slice();
      reverseArray.reverse();
        return reverseArray.map((v) => (
            <Version version={v} />
        ));
  }
}

export default Changelog