import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import darkTheme from './theme';
import axios from 'axios';
import { getConfigVar } from './services/runtimeConfig';
import { Provider } from 'react-redux';
import { store } from './state/store';

axios.defaults.baseURL = `${getConfigVar('API_URL')}`

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <Provider store={store}>
          <CssBaseline />
          <App />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
