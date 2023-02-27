import React from 'react';

import PageHeader from './PageHeader';
import Chat from './Chat';
import PageFooter from './PageFooter';

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
                <div>
                    <PageFooter />
                </div>
            </div>
        );
    }
}

export default App;