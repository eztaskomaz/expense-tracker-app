import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from "@speechly/react-client";

import App from './App';
import './index.css';
import { Provider } from "./context/context";

ReactDOM.render(
    <SpeechProvider appId="718bcacf-b32e-4ca9-ab4f-7a8e156a74b2" language="en-US" >
        <Provider>
            <App />
        </Provider>
    </SpeechProvider> ,document.getElementById('root')
);
