import { useState } from 'react';

const MessageForm = () => {
	

	const submitHandler = (e) => {

	}

	const handleChange = (e) => {

	}
 return (
	 <from className="message-form" onSubmit={submitHandler}>
		 <input
		 className="message-input"
		 placeholder="Send Message"
		 value={value}
		 onChange={handleChange}/>
	 </from>
 )
}

export default MessageForm;