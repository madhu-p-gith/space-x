import React from "react";
import Header from "./components/Header/Header.jsx";
import "./styles.css";
import Launch from "./components/Launch/Launch.jsx";
import LaunchList from "./components/LaunchList/LaunchList.jsx";
function App() {
  return (
    <div className="App">
      <Header />
      <LaunchList />
    </div>
  );
}

export default App;
