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
      {/*  */}
<<<<<<< HEAD
      yy1y 🗺 
=======

      one112aaa2 🗺 

>>>>>>> f46c4355a6094611920144c21bf01b8e0584affe
       <Router>
        <Header />
        <Switch>
          <Route path="/launch/:flight_number">
            <LaunchView />
          </Route>
          <Route path="/">
            <LaunchList />
          </Route>
        </Switch>
      </Router> 
    <p>{`hell011`}</p>
    </div>
  );
}

export default App;
