import React from "react";
import WeatherContainerToday from "./components/WeatherContainerToday";
import WeatherContainerTomorrow from "./components/WeatherContainerTomorrow";
import WeatherContainerOtherDay from "./components/WeatherContainerOtherDay";
import Header from "./components/Header";
import Navigate from "./components/Navigate";
import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Navigate></Navigate>
        <Switch>
          <Route path="/" exact component={WeatherContainerToday}></Route>
          <Route
            path="/yarin"
            exact
            component={WeatherContainerTomorrow}
          ></Route>
          <Route
            path="/ertesi-gün"
            exact
            component={WeatherContainerOtherDay}
          ></Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
