import React from 'react';

class MessageForm extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            username: '',
            content: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.refreshCallback = props.refreshCallback.bind(this);

        console.log(this.refreshCallback);
    }

    handleChange (event)
    {
        this.setState({
            username: event.target.name === 'usernameInput' ? event.target.value : this.state.username,
            content: event.target.name === 'contentInput' ? event.target.value : this.state.content
        });
    }

    handleSubmit (event)
    {

        event.preventDefault();

        if (this.state.content.length === 0)
        {
            alert("You can't send an empty message");
            return;
        }

        let nowDateTime = new Date(Date.now());

        const messagePayload = {
            username: this.state.username,
            content: this.state.content,
            timestamp: nowDateTime,
        }

        fetch('http://localhost:5000/messages', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(messagePayload)
        }).then(response =>
        {
            this.refreshCallback();
        });

        this.setState({
            username: '',
            content: ''
        });
    }

    render ()
    {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input name='usernameInput' type="text" value={this.state.username} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Content:
                    <textarea name='contentInput' type="text" value={this.state.content} onChange={this.handleChange} />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default MessageForm;