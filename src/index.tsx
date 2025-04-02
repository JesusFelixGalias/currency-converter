import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './index.css';
import App from './App';

// Get the root element from the DOM
const rootElement = document.getElementById('root') as HTMLElement;

// Create a root with React 18's new API
const root = ReactDOM.createRoot(rootElement);

// Render the app using the new root API
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);