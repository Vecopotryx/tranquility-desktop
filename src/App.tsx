import { useEffect } from 'react';
import { WindowListProvider } from './contexts/WindowContext';
import { loadTheming } from './services/settings-loader';
import { AppContextProvider } from './contexts/AppContext';
import WindowManager from './core/WindowManager';
import PanelContainer from './core/PanelContainer';

function App() {
	useEffect(() => {
		loadTheming();
	}, []);

	return (
		<WindowListProvider>
			<AppContextProvider>
				<PanelContainer />
				<WindowManager />
			</AppContextProvider>
		</WindowListProvider>
	);
}

export default App;
