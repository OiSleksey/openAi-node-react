import React from 'react';
import { Provider } from 'react-redux';
import store, { persistor } from '../redux/store';
import './App.scss';
import Chat from './Chat/Chat';
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap Bundle JS
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="container">
          <div className="container__main">
            <Chat />
          </div>
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
