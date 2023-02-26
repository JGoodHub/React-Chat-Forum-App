import React from 'react';

class ChatMessage extends React.Component
{
    render ()
    {
        let dateFormatted = Date.parse(this.props.timestamp);

        return (
            <div className='row chatMessage'>
                {this.props.sender}  {this.props.timestamp}
                <br />
                {this.props.content}
            </div>
        );
    }
}

export default ChatMessage;