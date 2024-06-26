import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import store from "./store";
import "react-datepicker/dist/react-datepicker.css";
import 'react-tagsinput/react-tagsinput.css' 
import { ToastContainer } from "react-toastify";
import 'react-tagsinput/react-tagsinput.css' // If using WebPack and style-loader.

ReactDOM.render(
  <Provider store={store}>
  <ToastContainer />
  <App />
</Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
