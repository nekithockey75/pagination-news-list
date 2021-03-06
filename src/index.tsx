import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { rootReducer } from './reducers';
import { Provider } from 'react-redux';

const devToolsProp = 'devToolsExtension'
const enhancer = window[devToolsProp] ? window[devToolsProp]()(createStore) : createStore;
const store = enhancer(rootReducer, {});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
