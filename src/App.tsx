import { useEffect, useState } from 'react';
import { WindowListProvider } from './contexts/WindowContext';
import { loadTheming } from './services/settings-loader';
import WindowManager from './core/WindowManager';
import { AppContextProvider } from './contexts/AppContext';
import { Panel } from './panels/Panel';
import { ShortcutList } from './panels/widgets/ShortcutList';
import { InlineClock } from './panels/widgets/InlineClock';
import { OpenWindowList } from './panels/widgets/OpenWindowList';
import Settings from './applications/settings/Settings';
import SettingsIcon from './assets/img/icons/settings.png';
import Dropdown from './panels/Dropdown';
import { PanelProps } from './panels/types';

const testPanel = {
	style: {
		horizontalAlignment: 'center',
		verticalAlignment: 'top',
		width: '90%', // Default is 100%, but set to 90% for testing of centering
		height: '10%' // Not used yet
	},
	widgets: [
		{
			name: 'Applications',
			component: (
				<Dropdown text="Applications">
					<ShortcutList />
				</Dropdown>
			)
		},
		{
			name: 'Options',
			component: (
				<Dropdown text="Options">
					<ShortcutList
						customList={[
							{
								id: 0,
								name: 'Settings',
								buttonText: 'Settings',
								component: <Settings />,
								appIcon: SettingsIcon
							}
						]}
					/>
				</Dropdown>
			)
		},
		{
			name: 'OpenWindowList',
			component: <OpenWindowList />
		},
		{
			name: 'Clock',
			component: <InlineClock />
		}
	]
};

const testPanel2 = {
	style: {
		horizontalAlignment: 'right',
		verticalAlignment: 'bottom',
		width: '20%',
		height: '10%'
	},
	widgets: [
		{
			name: 'Test',
			component: <span>This is a second panel</span>
		}
	]
};

function App() {
	useEffect(() => {
		loadTheming();
	}, []);

	const [panelList, setPanelList] = useState<PanelProps[]>([
		testPanel,
		testPanel2
	]);

	return (
		<WindowListProvider>
			<AppContextProvider>
				{panelList.map((panelSettings, index) => (
					<Panel key={index} {...panelSettings} />
				))}

				{/* <Menubar /> */}
				<WindowManager />
			</AppContextProvider>
		</WindowListProvider>
	);
}

export default App;
