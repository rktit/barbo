import React, { Component } from "react";

import { Provider } from "react-redux";
import store from "store";

import Routes from "Routes";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
