import React, { Component } from "react";
import AppWindow from "./components/appWindow";
import Notes from "./components/notes";

class App extends Component {
  state = {
    appWindows: [
      { id: 1, appName: "Notes", appComponent: <Notes/> },
      { id: 2, appName: "Notes2", appComponent: <Notes/>}
  ],
  };

  render() {
    return (
      <React.Fragment>
        {this.state.appWindows.map((appWindow) => (
          <AppWindow key={appWindow.id} appName={appWindow.appName}>
            {appWindow.appComponent}
          </AppWindow>
        ))}
      </React.Fragment>
    );
  }
}

export default App;
