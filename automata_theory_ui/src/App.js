import Footer from './components/shared/footer/footer';
import Header from './components/shared/header/header';
import logo from './static/logo-white.svg';

import React, { useEffect } from "react";
import axios from 'axios';

import Login from './components/login/Login';

function App() {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Header logo={logo} />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
