import React, { Component } from "react";
import AppWindow from "./components/appWindow";
import Notes from "./components/notes";
import Menubar from "./components/menubar";
import './components/appWindow.css';

class App extends Component {
  state = {
    appWindows: [
      { id: 1, appName: "Notes", appComponent: <Notes />, zIndex: 1 },
      { id: 2, appName: "Notes2", appComponent: <Notes />, zIndex: 2 },
    ],
    lastFocused: 0,
    frameOverlayVisible: false,
    frameOverlayIndex: 2,
  };

  handleClose = (appId) => {
    const appWindows = this.state.appWindows.filter((c) => c.id !== appId);
    this.setState({ appWindows });
  };

  handleOpen = (appName, appComponent) => {
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
          appName: appName + newId,
          appComponent: appComponent,
          zIndex: highest + 1,
        },
      ],
      frameOverlayIndex: highest + 1
    }));
  };

  handleFocus = (appId, zIndex) => {
    if (appId !== this.state.lastFocused) {
      let highest = Math.max(
        ...this.state.appWindows.map((appWindow) => appWindow.zIndex)
      );
      if (zIndex < highest) {
        const newAppWindows = this.state.appWindows.map((appWindow) => {
          if (appWindow.id !== appId) return appWindow;
          return { ...appWindow, zIndex: highest + 1 };
        });
        this.setState({ appWindows: newAppWindows, lastFocused: appId, frameOverlayIndex: highest + 1});
      }
    }
  };

  handleResizeOrDragStart = () => {
    this.setState({ frameOverlayVisible: true });
  }

  handleResizeOrDragStop = () => {
    this.setState({ frameOverlayVisible: false });
  }

  render() {
    return (
      <React.Fragment>
        <Menubar onOpen={this.handleOpen}></Menubar>
        <div style={{display: this.state.frameOverlayVisible ? "block" : "none", zIndex: this.state.frameOverlayIndex}} className="frameOverlay"/>
        {this.state.appWindows.map((appWindow) => (
          <AppWindow
            key={appWindow.id}
            id={appWindow.id}
            appName={appWindow.appName}
            zIndex={appWindow.zIndex}
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

export default App;
