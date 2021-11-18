import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm'

const App = () => {
	if (!localStorage.getItem('username')) return <LoginForm />
	return (
		// Setting props for the ChatEngine component  -> Project setup in https://chatengine.io/
		<ChatEngine
			height="100vh"
			projectID="9987b00b-03ec-4586-b6a8-7f42bbfc5a82"
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/> }
		/>
	)
	}
export default App;