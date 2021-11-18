const MyMessage = ({message}) => {
	if(message?.attachments?.length>0) {
		return (
			<img
			src={message.attachments[0].file}
			alt="message-attachment-img"
			className="message-image"
			style={{float:'right'}}
			 />
		)
	}
	return (
		<div className="message" style={{float:'right', marginRight: '18px', color:'white', backgroundColor: '#a344d5'}}>
			{message.text}
		</div>
	)
   }
   export default MyMessage;