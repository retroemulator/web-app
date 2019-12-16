import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import AppRouter from './routing/AppRouter';

// TODO: Wrap AppRouter with various providers

ReactDOM.render(<AppRouter />, document.getElementById('root'));
