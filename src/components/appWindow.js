import React, { Component } from "react";
import "./appWindow.css";
import { Rnd } from "react-rnd";

class AppWindow extends Component {
  render() {
    return (
      <React.Fragment>
        <Rnd
          className="appWindow"
          default={{
            x: 0,
            y: 0,
          }}
        >
          <div className="titlebar">
            <button className="closeWindow">×</button>
            <a className="appName">{this.props.appName}</a>
            <button className="collapseWindow">▲</button>
          </div>
          <div className="appContent">{this.props.children}</div>
        </Rnd>
      </React.Fragment>
    );
  }
}

export default AppWindow;
