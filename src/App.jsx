import React from 'react';

import PageHeader from './PageHeader';
import Chat from './Chat';

class App extends React.Component
{
    

    render ()
    {
        return (
            <div>
                <div>
                    <PageHeader />
                </div>
                <div>
                    <Chat />
                </div>
            </div>
        );
    }
}

export default App;