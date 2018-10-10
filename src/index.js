import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
  html {
    color: red;
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
