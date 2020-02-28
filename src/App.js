import React from "react";
import WeatherContainer from "./components/WeatherContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <WeatherContainer></WeatherContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
