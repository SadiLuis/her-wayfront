import React, { useState , useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { ChatEngine, getOrCreateChat } from 'react-chat-engine'





function Chat (){
    

    const [username, setUsername] = useState('')

	function createDirectChat(creds) {
		getOrCreateChat(
			creds,
			{ is_direct_chat: true, usernames: [username] },
			() => setUsername('')
		)
	}

	function renderChatForm(creds) {
		return (
			<div>
				<input 
					placeholder='Username' 
					value={username} 
					onChange={(e) => setUsername(e.target.value)} 
				/>
				<button onClick={() => createDirectChat(creds)}>
					Create
				</button>
			</div>
		)
	}

    return (
        <div>   
            <ChatEngine
                appId="chat-engine-demo"
                projectID="be4a526f-bb7e-4976-a62a-5b20e16cb95b"
                userName="Janina"
                userSecret="jani123456"
                renderNewChatForm={(creds) => renderChatForm(creds)}
                />
        </div>
    )

}

export default Chat