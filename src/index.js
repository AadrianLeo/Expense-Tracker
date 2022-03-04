import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css'

ReactDOM.render(
    <SpeechProvider appId='6d21bc23-08df-429d-a529-d532c0992ab6' language='en-US'>
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById('root'));