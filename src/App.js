import AppWindow from './components/appWindow';
import Notes from './components/notes'

function App() {
  return (
    <div className="App">
      <AppWindow key='1' appName="Notes">
        <Notes></Notes>
      </AppWindow>
    </div>
  );
}

export default App;
