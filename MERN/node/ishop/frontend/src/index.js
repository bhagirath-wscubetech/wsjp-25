import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContextHolder from './ContextHolder';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextHolder>
      <App />
    </ContextHolder>
);