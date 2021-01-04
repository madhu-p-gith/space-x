import React from "react";
import Header from "./components/Header/Header.jsx";
import "./styles.css";
import Launch from "./components/Launch/Launch.jsx";
import LaunchList from "./components/LaunchList/LaunchList.jsx";
import LaunchView from "./components/LaunchView/LaunchView.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      Hellos 🗺
      <Router>
        <Header />
        <Switch>
          <h1>hiiiiiiiiiii</h1>
          <Route path="/launch/:flight_number">
            <LaunchView />
          </Route>
          <Route path="/">
            <LaunchList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
