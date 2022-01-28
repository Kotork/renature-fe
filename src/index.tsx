import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Application from './application';
import reportWebVitals from './reportWebVitals';

import storeConfig from './store/storeConfig'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeConfig}>
      <Application />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
