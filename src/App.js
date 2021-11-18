import { ChatEngine } from 'react-chat-engine';
import './App.css';

const App = () => {
	return (
		// Setting props for the ChatEngine component  -> Project setup in https://chatengine.io/
		<ChatEngine
			height="100vh"
			projectID="9987b00b-03ec-4586-b6a8-7f42bbfc5a82"
			userName="Nexxita"
			userSecret="bananas"
		/>
	)
	}
export default App;