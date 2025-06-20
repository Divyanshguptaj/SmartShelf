import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AlertProvider } from './context/AlertContext';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <AlertProvider>
      <App />
      <ToastContainer position="top-center" autoClose={3000} />
    </AlertProvider>
  </BrowserRouter>
);
toast("🎉 You've flagged the shelf! Just 3 more to alert staff!", {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
});
