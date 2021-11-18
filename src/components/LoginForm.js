import { useState } from 'react';
import axios from 'axios'; // API calls

const LoginForm = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		// username | password -> chatengine -> give messages
		const authObject = {
			'Project-ID': "9987b00b-03ec-4586-b6a8-7f42bbfc5a82",
			'User-Name': username,
			'User-Secret': password
		}
		try {
			// works -> logged in
			await axios.get('https://api.chatengine.io/chats', {headers: authObject})
			localStorage.setItem('username', username);
			localStorage.setItem('password', password)
			window.location.reload();
		}catch(err) {
			// doesn't work -> error -> try again
			setError('Oppsy Daisy! Incorrect credentials, eh?')

		}

	}

	return (
		<div className="wrapper">
			<div className="form">
				<h1 className="title">TVass Chat App</h1>
				<h1 className="title" style={{fontSize:'20px', fontStyle: 'italic'}}> by the power vested in me by React.js</h1>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						className="input"
						placeholder="Username"
						required
					/>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="input"
						placeholder="Password"
						required
					/>
						<div align="center">
							<button type="submit" className="button">
								<span>Start Chatting</span>
							</button>
						</div>
						<h2 className="error">
							{error}
						</h2>
				</form>
			</div>
		</div>
	)
}

export default LoginForm;