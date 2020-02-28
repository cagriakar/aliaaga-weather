import React from "react";
import WeatherContainerToday from "./components/WeatherContainerToday";
import WeatherContainerTomorrow from "./components/WeatherContainerTomorrow";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route path="/" exact component={WeatherContainerToday}></Route>
          <Route
            path="/yarin"
            exact
            component={WeatherContainerTomorrow}
          ></Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
