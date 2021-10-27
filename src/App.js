import React, { Component } from "react";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Provider>
      <div className="App">
        <Header />
        <Contacts branding="Contact Manager" />
      </div>
    </Provider>
  );
}

export default App;
