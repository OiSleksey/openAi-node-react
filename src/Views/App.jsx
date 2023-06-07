import React from 'react';
import './App.scss';
import Chat from './Chat/Chat';
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap Bundle JS
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import b

const App = () => {
  return (
    <div className="container">
      <div className="container__main">
        <Chat />
      </div>
    </div>
  );
};

export default App;
