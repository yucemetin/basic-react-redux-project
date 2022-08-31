import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/root/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux"
import configureStore from "./redux/reducers/configureStore"

const store = configureStore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
