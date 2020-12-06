import React, { Component } from "react";
import AppWindow from "./appWindow";
import Notes from "./notes";
import ChipPlayer from "./chipPlayer";
import './appWindow.css';
import { Settings } from './settings';
import Menubar from "./menubar";

class WindowManager extends Component {
  state = {
    appWindows: [
      {
        id: 1,
        appName: "Notes",
        appComponent: <Notes />,
        zIndex: 1,
        defaultWidth: 200,
        defaultHeight: 200,
        isUnfocused: false,
      },
      {
        id: 2,
        appName: "Chip Player JS",
        appComponent: <ChipPlayer />,
        zIndex: 2,
        defaultWidth: "50%",
        defaultHeight: 500,
        isUnfocused: false,
      },
    ],
    lastFocused: 0,
    frameOverlayVisible: false,
    frameOverlayIndex: 2,
  };

  handleClose = (appId) => {
    const appWindows = this.state.appWindows.filter((c) => c.id !== appId);
    this.setState({ appWindows });
  };

  handleOpen = (
    appName,
    appComponent,
    defaultWidth,
    defaultHeight,
    backgroundColor
  ) => {
    let newId =
      Math.max(...this.state.appWindows.map((appWindow) => appWindow.id)) + 1;
    let highest = Math.max(
      ...this.state.appWindows.map((appWindow) => appWindow.zIndex)
    );
    if (!isFinite(newId)) {
      newId = 1; // Makes sure that newId is a valid number, as I had problems with it getting set to -Infinity when appWindows was empty.
    }
    this.setState((prevState) => ({
      appWindows: [
        ...prevState.appWindows,
        {
          id: newId,
          appName: appName,
          appComponent: appComponent,
          zIndex: 1,
          defaultWidth: defaultWidth,
          defaultHeight: defaultHeight,
          backgroundColor: backgroundColor,
        },
      ],
      frameOverlayIndex: highest + 1,
      lastFocused: newId - 1,
    }));
  };

  handleFocus = (appId, zIndex) => {
    if (appId !== this.state.lastFocused) {
      let highest = Math.max(
        ...this.state.appWindows.map((appWindow) => appWindow.zIndex)
      );
      if (zIndex < highest) {
        const newAppWindows = this.state.appWindows.map((appWindow) => {
          if (appWindow.id !== appId)
            return { ...appWindow, isUnfocused: true };
          return { ...appWindow, zIndex: highest + 1, isUnfocused: false };
        });
        this.setState({
          appWindows: newAppWindows,
          lastFocused: appId,
          frameOverlayIndex: highest + 1,
        });
      }
    }
  };

  handleResizeOrDragStart = () => {
    this.setState({ frameOverlayVisible: true });
  };

  handleResizeOrDragStop = () => {
    this.setState({ frameOverlayVisible: false });
  };

  render() {
    return (
      <React.Fragment>
        <div
          style={{
            display: this.state.frameOverlayVisible ? "block" : "none",
            zIndex: this.state.frameOverlayIndex,
          }}
          className="frameOverlay"
        />
        <Menubar onOpen={this.handleOpen} theme={this.props.theme} setTheme={this.props.setTheme} background={this.props.background} setBackground={this.props.setBackground}/>
        {this.state.appWindows.map((appWindow) => (
          <AppWindow
            key={appWindow.id}
            id={appWindow.id}
            appName={appWindow.appName}
            zIndex={appWindow.zIndex}
            defaultHeight={appWindow.defaultHeight}
            defaultWidth={appWindow.defaultWidth}
            isUnfocused={appWindow.isUnfocused}
            onClose={this.handleClose}
            onFocus={this.handleFocus}
            onResizeOrDragStart={this.handleResizeOrDragStart}
            onResizeOrDragStop={this.handleResizeOrDragStop}
          >
            {appWindow.appComponent}
          </AppWindow>
        ))}
      </React.Fragment>
    );
  }
}

//             backgroundColor={appWindow.backgroundColor}
//  backgroundColor: "#010088",

export default WindowManager;
