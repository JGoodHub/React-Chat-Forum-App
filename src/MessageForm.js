import React, { useState } from 'react';
import { sendRoomMessage } from './Services';

const MessageForm = (props) =>
{

    const [username, setUsername] = useState("");
    const [content, setContent] = useState("");

    const handleChange = (event) =>
    {
        event.target.name === 'usernameInput' && setUsername(event.target.value);
        event.target.name === 'contentInput' && setContent(event.target.value);
    }

    const handleSubmit = (event) =>
    {
        event.preventDefault();

        if (username.length === 0)
        {
            alert("You need to add a username");
            return;
        }

        if (content.length === 0)
        {
            alert("You can't send an empty message");
            return;
        }

        let currentDateTime = new Date(Date.now());

        const messagePayload = {
            username: username,
            content: content,
            timestamp: currentDateTime,
        }

        sendRoomMessage(messagePayload)
            .then(response =>
            {
                props.refreshCallback();
            });

        setUsername("");
        setContent("");
    }

    return (
        <div className='w-100 bg-dark'>
            <form onSubmit={handleSubmit}>
                <div className='container'>
                    <div className="form-group col-sm">
                        <label htmlFor="username">Username:</label>
                        <input type="text" className="form-control" id="username" name="usernameInput" value={username} onChange={handleChange} />
                    </div>
                    <div className="form-group col-sm">
                        <label htmlFor="content">Content:</label>
                        <textarea className="form-control" id="content" name="contentInput" rows="5" value={content} onChange={handleChange} ></textarea>
                    </div>
                    <div className='col-sm'>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );

    // return (
    //     <form onSubmit={handleSubmit}>
    //         <label>
    //             Name:
    //             <input name='usernameInput' type="text" value={username} onChange={handleChange} />
    //         </label>
    //         <br />
    //         <label>
    //             Content:
    //             <textarea name='contentInput' type="text" value={content} onChange={handleChange} />
    //         </label>
    //         <br />
    //         <input type="submit" value="Submit" />
    //     </form>
    // );
}

export default MessageForm;

// class MessageFormOld extends React.Component
// {
//     constructor(props)
//     {
//         super(props);
//         this.state = {
//             username: '',
//             content: '',
//         };

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);

//         //this.refreshCallback = props.refreshCallback.bind(this);
//     }

//     handleChange (event)
//     {
//         this.setState({
//             username: event.target.name === 'usernameInput' ? event.target.value : this.state.username,
//             content: event.target.name === 'contentInput' ? event.target.value : this.state.content
//         });
//     }

//     handleSubmit (event)
//     {

//         event.preventDefault();

//         if (this.state.content.length === 0)
//         {
//             alert("You can't send an empty message");
//             return;
//         }

//         let nowDateTime = new Date(Date.now());

//         const messagePayload = {
//             username: this.state.username,
//             content: this.state.content,
//             timestamp: nowDateTime,
//         }

//         fetch('http://localhost:5000/messages', {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(messagePayload)
//         }).then(response =>
//         {
//             //this.refreshCallback();
//         });

//         this.setState({
//             username: '',
//             content: ''
//         });
//     }

//     render ()
//     {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Name:
//                     <input name='usernameInput' type="text" value={this.state.username} onChange={this.handleChange} />
//                 </label>
//                 <br />
//                 <label>
//                     Content:
//                     <textarea name='contentInput' type="text" value={this.state.content} onChange={this.handleChange} />
//                 </label>
//                 <br />
//                 <input type="submit" value="Submit" />
//             </form>
//         );
//     }
// }

