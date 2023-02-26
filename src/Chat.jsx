import React, { useEffect, useState } from 'react';

import ChatMessage from './ChatMessage'
import MessageForm from './MessageForm';

import { fetchLatestMessages } from './Services';

const Chat = async () =>
{

    //const [messageStore, setMessageStore] = useState({ messages: [] });

    // useEffect(() =>
    // {
    //     setMessageStore(fetchMessagesAsync());
    // }, [])

    // const fetchMessagesAsync = async () =>
    // {
    //     const messages = await fetchLatestMessages();
    //     console.log(messages);
    //     return messages;
    // }

    const chatMessages = async () =>
    {
        const messages = await fetchLatestMessages();

        console.log(messages);

        messages.map((message) =>
        {
            return <ChatMessage sender={message.username} content={message.content} timestamp={message.timestamp} />;
        });
    }

    return (
        <div>
            <div className='container'>
                {await chatMessages()}
            </div>
            <div>
                <div>
                </div>
            </div>
        </div>

    );

};

export default Chat;