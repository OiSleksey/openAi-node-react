import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import './App.scss';
import Chat from './Chat/Chat';
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap Bundle JS
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import b

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <div className="container__main">
          <Chat />
        </div>
      </div>
    </Provider>
  );
};

export default App;