import { useWindowList } from '../contexts/WindowContext';
import AppWindow from './AppWindow';

const WindowManager = () => {
	const windowList = useWindowList().windowList;
	const handleClose = useWindowList().handleClose;
	const handleFocus = useWindowList().handleFocus;

	return (
		<>
			{windowList.map((appWindow) => (
				<AppWindow
					key={appWindow.id}
					appId={appWindow.id}
					isFocused={appWindow.isFocused}
					isIframe={appWindow.isIframe}
					title={appWindow.title}
					index={appWindow.index}
					handleClose={handleClose}
					handleFocus={handleFocus}>
					{appWindow.component}
				</AppWindow>
			))}
		</>
	);
};

export default WindowManager;
