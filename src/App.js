import React, { Component } from "react";
import AppWindow from "./components/appWindow";
import Notes from "./components/notes";
import Menubar from "./components/menubar";

class App extends Component {
  state = {
    appWindows: [
      { id: 1, appName: "Notes", appComponent: <Notes/> },
      { id: 2, appName: "Notes2", appComponent: <Notes/>}
  ],
  };

  handleClose =  (appId) => {
    const appWindows = this.state.appWindows.filter(c => c.id !== appId);
    this.setState({ appWindows });
  }

  render() {
    return (
      <React.Fragment>
        <Menubar></Menubar>
        {this.state.appWindows.map((appWindow) => (
          <AppWindow key={appWindow.id} id={appWindow.id} appName={appWindow.appName} onClose={this.handleClose}>
            {appWindow.appComponent}
          </AppWindow>
        ))}
      </React.Fragment>
    );
  }
}

export default App;
