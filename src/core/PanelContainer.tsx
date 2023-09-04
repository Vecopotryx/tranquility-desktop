import { Panel } from '../panels/Panel';
import { ShortcutList } from '../panels/widgets/ShortcutList';
import { InlineClock } from '../panels/widgets/InlineClock';
import { OpenWindowList } from '../panels/widgets/OpenWindowList';
import Settings from '../applications/settings/Settings';
import SettingsIcon from '../assets/img/icons/settings.png';
import Dropdown from '../panels/Dropdown';
import { PanelProps } from '../panels/types';
import { useState } from 'react';

const defaultPanel = {
	style: {
		horizontalAlignment: 'center',
		verticalAlignment: 'top',
		width: '100%',
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

const PanelContainer = () => {
	const [panelList] = useState<PanelProps[]>([defaultPanel]);
	return (
		<>
			{panelList.map((panelSettings, index) => (
				<Panel key={index} {...panelSettings} />
			))}
		</>
	);
};

export default PanelContainer;
