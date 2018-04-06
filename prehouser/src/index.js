import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from './ducks/store';

ReactDOM.render(
    <div>
        <Provider store={store} >
            <HashRouter>
                <App />
            </HashRouter>
        </Provider>
    </div>,


    document.getElementById('root'));
registerServiceWorker();
