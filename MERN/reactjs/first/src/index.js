import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App name="Bhagirath" age="50"/>
    <App name="Divya" age="10"/>
    <App name="Ritika" age="21"/>
    <App name="Rahul" age="20"/>
    <App name="Gulshan" age="45"/>
  </>
);
// App() -> <App/>