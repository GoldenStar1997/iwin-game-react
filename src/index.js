import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="686110024658-8vp70u620t9imo5hsv4eq9h21fiet3ko.apps.googleusercontent.com">
    <React.StrictMode>
      {/* <div className="preloader" id="preloader"></div> */}
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider>,
);
// reportWebVitals();
