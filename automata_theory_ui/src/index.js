import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/scss/colors.scss'
import './assets/scss/fonts.scss'
import './assets/scss/header.scss'
import './assets/scss/footer.scss'

import 'mdb-react-ui-kit/dist/css/mdb.min.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


