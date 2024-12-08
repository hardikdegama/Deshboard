import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18
import App from './App'; // Root App component
import './index.css'; // Global CSS

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
