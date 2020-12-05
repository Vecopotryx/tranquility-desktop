import React, { Component } from "react";
import { Rnd } from "react-rnd";

class AppWindow extends Component {
  state = {
    appContentCollapsed: false,
    maxHeight: "3000",
    storedWidth: "100",
    storedHeight: "200",
  };


  // Todo: Make constructor that sets maxHeight to availHeight directly
  updateCollapse = () => {
    this.rnd.updateSize({width: this.state.storedWidth, height: this.state.appContentCollapsed ?  this.state.storedHeight : "0" });
    this.setState({appContentCollapsed: !this.state.appContentCollapsed, maxHeight: this.state.appContentCollapsed ?  window.screen.availHeight : "100%"})
  }

  render() {
    return (
      <React.Fragment>
        <Rnd
        style={{zIndex: this.props.zIndex}}
          ref={c => { this.rnd = c; }} 
          className="appWindow"
          maxHeight={this.state.maxHeight}
          onResizeStop={(e, direction, ref) => {
            this.props.onResizeOrDragStop();
            if(!this.state.appContentCollapsed){
              this.setState({
                storedWidth: ref.style.width,
                storedHeight: ref.style.height
              });
            } else {
              this.setState({
                storedWidth: ref.style.width
              });
            }
          }}
          onDragStop={() => {
            this.props.onResizeOrDragStop();
          }}
          onResizeStart={() => {
            this.props.onResizeOrDragStart();
          }}
          onDragStart={() => {
            this.props.onResizeOrDragStart();
          }}
          default={{
            x: 100,
            y: 100,
          }}
        >
          <div className="appWrapper" onMouseEnter={() => this.props.onFocus(this.props.id, this.props.zIndex)}>
          <div className="titlebar">
            <button onClick={() => this.props.onClose(this.props.id)} className="closeWindow">×</button>
            <a className="appName">{this.props.appName}</a>
            <button onClick={this.updateCollapse} className="collapseWindow">{this.state.appContentCollapsed ? "▼" : "▲"}</button>
          </div>
          <div className="appContent" style={{display: this.state.appContentCollapsed ? "none" : "block"}}>{this.props.children}</div>
          </div>

        </Rnd>
      </React.Fragment>
    );
  }
}

export default AppWindow;
