import React, { Component } from "react";

class ChipPlayer extends Component {
  render() {
    return (
      <React.Fragment>
        <iframe
          title="chipPlayerJS"
          height="100%"
          src="https://mmontag.github.io/chip-player-js/browse/ModArchives?play=ModArchives%2F1fineday.xm"
          width="100%"
          style={{border: "none"}}
        >
          <p>Your browser does not support iframes.</p>
        </iframe>
      </React.Fragment>
    );
  }
}

export default ChipPlayer;
