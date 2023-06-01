import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactRouter } from 'react-router-dom';
import './index.css';
import { App } from './App';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ReactRouter>
        <App />
    </ReactRouter>
);