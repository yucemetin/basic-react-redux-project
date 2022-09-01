import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/root/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux"
import configureStore from "./redux/reducers/configureStore"
import 'alertifyjs/build/css/alertify.min.css'
import { BrowserRouter } from "react-router-dom"

const store = configureStore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
