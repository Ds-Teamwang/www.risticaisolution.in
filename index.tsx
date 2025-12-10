import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Mock Service Worker Registration for PWA PWA functionality
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // In a real environment, this would point to /service-worker.js
    console.log('Service Worker registration attempted (Mocked)');
  });
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);