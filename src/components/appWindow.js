import React, { Component } from "react";
import { Rnd } from "react-rnd";

class AppWindow extends Component {
  state = {
    appContentCollapsed: false,
    maxHeight: "3000",
    storedWidth: "100",
    storedHeight: "200",
    internalFrameOverlayVisible: false,
  };

  componentDidMount() {
    this.setState({ storedHeight: this.props.defaultHeight, storedWidth: this.props.defaultWidth, maxHeight: window.screen.availHeight });
    this.props.onFocus(this.props.id, this.props.zIndex);
  }

  updateCollapse = () => {
    this.rnd.updateSize({width: this.state.storedWidth, height: this.state.appContentCollapsed ?  this.state.storedHeight : "0" });
    this.setState({appContentCollapsed: !this.state.appContentCollapsed, maxHeight: this.state.appContentCollapsed ?  window.screen.availHeight : "100%"})
  }

  render() {
    return (
      <React.Fragment>
        <Rnd
          style={{zIndex: this.props.zIndex, filter: this.props.isUnfocused ? "grayscale(60%)" : "grayscale(0%)"}}
          ref={c => { this.rnd = c; }} 
          className="appWindow"
          maxHeight={this.state.maxHeight}
          onResizeStop={(e, direction, ref) => {
            this.props.onResizeOrDragStop();
            if(!this.state.appContentCollapsed){
              this.setState({
                storedWidth: ref.style.width,
                storedHeight: ref.style.height,
                internalFrameOverlayVisible: false
              });
            } else {
              this.setState({
                storedWidth: ref.style.width,
                internalFrameOverlayVisible: false
              });
            }
          }}
          cancel=".collapseWindow, .closeWindow, .appContent>*"
          onDragStop={() => {
            this.setState({internalFrameOverlayVisible: false});
            this.props.onResizeOrDragStop();
          }}
          onResizeStart={() => {
            this.setState({internalFrameOverlayVisible: true});
            this.props.onResizeOrDragStart();
          }}
          onDragStart={() => {
            this.setState({internalFrameOverlayVisible: true});
            this.props.onResizeOrDragStart();
          }}
          default={{
            x: 700,
            y: 400,
            height: this.props.defaultHeight,
            width: this.props.defaultWidth,
          }}
        >
          <div className="appWrapper" onMouseEnter={() => this.props.onFocus(this.props.id, this.props.zIndex)}>
          <div className={this.props.isUnfocused ? 'titlebarUnfocused' : 'titlebar'}>
            <button onClick={() => this.props.onClose(this.props.id)} className="closeWindow">×</button>
            <a className="appName">{this.props.appName}</a>
            <button onClick={this.updateCollapse} className="collapseWindow">{this.state.appContentCollapsed ? "▼" : "▲"}</button>
          </div>
          <div className="appContent" style={{display: this.state.appContentCollapsed ? "none" : "block", backgroundColor: this.props.customBackground !== null ? "block" : "none"}}>
            <div style={{display: this.state.internalFrameOverlayVisible ? "block" : "none"}} className="internalFrameOverlay"/>
            {this.props.children}
            </div>
          </div>

        </Rnd>
      </React.Fragment>
    );
  }
}

// style={{color: this.props.isUnfocused ? "gray" : "black"}}

export default AppWindow;
