import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // ✅ Add this line
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"; // <-- Only this line here

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> {/* Wrap your whole app here */}
    <App />
  </BrowserRouter>
);

reportWebVitals();
