import React from 'react';

const ChatMessage = (message) =>
{
    return (
        <div className='row chatMessage'>
            {message.sender}  {message.timestamp}
            <br />
            {message.content}
        </div>
    );
}

export default ChatMessage;