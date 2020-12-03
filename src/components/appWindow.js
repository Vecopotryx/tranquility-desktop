import React, { Component } from "react";
import "./appWindow.css";

class AppWindow extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="appWindow">
          <div className="titlebar">
            <button className="closeWindow">×</button>
            <a className="appName">{this.props.appName}</a>
            <button className="collapseWindow">▲</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AppWindow;
