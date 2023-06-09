import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId="686110024658-8vp70u620t9imo5hsv4eq9h21fiet3ko.apps.googleusercontent.com">
      <React.StrictMode>
        <div className="preloader" id="preloader"></div>
        <App />
      </React.StrictMode>
    </GoogleOAuthProvider>
  </Provider>
);
// reportWebVitals();
