import React, { Component } from "react";

class ChipPlayer extends Component {
  render() {
    return (
      <div style={{height: "100%", overflow: "hidden"}}>
        <iframe
          title="chipPlayerJS"
          height="100%"
          src="https://mmontag.github.io/chip-player-js/browse/ModArchives?play=ModArchives%2F1fineday.xm"
          width="100%"
          style={{border: "none"}}
        >
          <p>Your browser does not support iframes.</p>
        </iframe>
      </div>
    );
  }
}

export default ChipPlayer;
