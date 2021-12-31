import "./App.css";
import React from "react";
import Main from "./components/Main";
import { BrowserRouter as Router, Link } from 'react-router-dom';
//Route, Switch
function App() {
  return (
    <Router>
      <div className="App">
      <Main></Main>
      </div>
    </Router>
  );
}

export default App;
