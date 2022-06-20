import React from 'react';
import ReactDOM from 'react-dom/client'; //help to connect to HTMl file
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
