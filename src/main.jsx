import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a new instance of QueryClient
const queryClient = new QueryClient();

// Render the App wrapped in QueryClientProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}> {/* Wrap App with QueryClientProvider */}
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);
