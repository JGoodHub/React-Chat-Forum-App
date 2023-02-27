import React, { useEffect, useState } from 'react';

import ChatMessage from './ChatMessage'
import MessageForm from './MessageForm';

import { getAllRoomMessages } from './Services';

const Chat = () =>
{

    const [messageStore, setMessageStore] = useState([]);

    useEffect(() =>
    {
        const fetchData = async () =>
        {
            const messages = await getAllRoomMessages();
            setMessageStore(messages);
        }

        fetchData()
            .catch(console.error);
    }, []);

    const getChatMessageComponents = () =>
    {
        return messageStore.map((message) =>
        {
            return <ChatMessage
                key={message.timestamp}
                sender={message.username}
                content={message.content}
                timestamp={message.timestamp}
            />;
        });
    }

    const refreshMessages = () =>
    {
        const fetchData = async () =>
        {
            const messages = await getAllRoomMessages();
            setMessageStore(messages);
        }

        fetchData()
            .catch(console.error);
    }

    return (
        <div>
            <div className='container'>
                {getChatMessageComponents()}
            </div>
            <div>
                <div>
                    <MessageForm refreshCallback={refreshMessages} />
                </div>
            </div>
        </div>
    );

};

export default Chat;