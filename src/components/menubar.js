import React, { Component } from "react";
import Notes from "../components/notes";

class Menubar extends Component {
    
  render() {
    return (
      <React.Fragment>
        <div id="menubarLeft">
            <button onClick={() => this.props.onOpen("Notes from menubar", <Notes/>)} >Open notes</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Menubar;
