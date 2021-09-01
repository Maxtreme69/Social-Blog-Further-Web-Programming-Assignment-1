import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Forum from "./components/Forum";
import Form from "./components/Form";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import { Home } from "./components/Home";
import Footer from "./components/Footer";

function App() {
  console.log("user local storage " + localStorage.getItem("user"));
  return (
    <Router>
      <Navbar />
      <div className="App">
        <div className="auth-wrapper">
          <Switch>
              <Route exact path="/" component={Home} />
              <Route
                path="/sign-in"
                component={Login}
              />
              <Route path="/sign-up" component={Signup} />
              <Route path="/forum" component={Forum} />
              <Route path="/form" component={Form} />
              <Route path="/profile" component={Profile}></Route>
          </Switch>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;

// Refernces
// https://pixabay.com/vectors/connections-communications-social-2099068/
