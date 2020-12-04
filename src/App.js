import React, { Component } from "react";
import AppWindow from "./components/appWindow";
import Notes from "./components/notes";
import Menubar from "./components/menubar";

class App extends Component {
  state = {
    appWindows: [
      { id: 1, appName: "Notes", appComponent: <Notes /> },
      { id: 2, appName: "Notes2", appComponent: <Notes /> },
    ],
    usedIds: [1,2],
  };

  handleClose = (appId) => {
    const appWindows = this.state.appWindows.filter((c) => c.id !== appId);
    this.setState({ appWindows });
  };

  handleOpen = (appName, appComponent) => {
    let newId = Math.max(...this.state.appWindows.map(appWindow => appWindow.id)) + 1;
    if(!isFinite(newId)){
      newId = 1; // Makes sure that newId is a valid number, as I had problems with it getting set to -Infinity when appWindows was empty.
    }
    this.setState((prevState) => ({
      appWindows: [
        ...prevState.appWindows,
        { id: newId, appName: appName + newId, appComponent: appComponent },
      ],
    }));
  };

  render() {
    return (
      <React.Fragment>
        <Menubar onOpen={this.handleOpen}></Menubar>
        {this.state.appWindows.map((appWindow) => (
          <AppWindow
            key={appWindow.id}
            id={appWindow.id}
            appName={appWindow.appName}
            onClose={this.handleClose}
          >
            {appWindow.appComponent}
          </AppWindow>
        ))}
      </React.Fragment>
    );
  }
}

export default App;
