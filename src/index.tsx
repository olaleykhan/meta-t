import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { myTheme } from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
				<GlobalStyle />
				<App />
			</ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
