import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Padre from "./Padre"
import Hijo from "./Hijo"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Padre>
      <Hijo nombre="Maximiliano"/>
      <Hijo nombre="Isabella"/>
      <Hijo nombre="Arnaldo"/>
    </Padre>
  </React.StrictMode>
);