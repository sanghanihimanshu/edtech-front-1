import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';



// Render the App wrapped in QueryClientProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
);
