import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Forum from "./components/Forum";
import Form from "./components/Form";
import Profile from "./components/Profile";
import Signin from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { getUser } from "./data/repository";

const USER_KEY = "user";

function App() {

  const [username, setUsername] = useState(getUser());
  console.log('user local storage ' + localStorage.getItem('user'))

  const loginUser = (username) => {
    setUsername(username);
  }

  const logoutUser = () => {
    localStorage.removeItem(USER_KEY);
    window.location.href="http://localhost:3000/sign-in";
    setUsername("");
  }

  // const setUser = user => {
  //   this.setState({
  //     user: user
  //   });
  // };

  return (
    <Router>
      <Navbar username='dave' logoutUser={logoutUser}></Navbar>
      <div className="App">
        <div className="auth-wrapper">
            <Switch>
              <>
              
                {/* Renders home page if user exists, else renders login */}
                  {
                    localStorage.getItem(USER_KEY)
                      ?
                    <Route exact path='/' component={Home}/>
                    :
                    ""
                    // // <Route path='/sign-in' component={Signin}/>
                    // <div>
                    //     {/* <Route exact path='profile' component={Profile}/> */}
                    //     <Signin ></Signin>
                    // </div>
                  }
                  <Route path="/sign-in" render={props => (
                    <Login {...props} loginUser={loginUser}/>
                  )
                } 
                />
                {/* <Route path="sign-in" component={() => <Login user={this.state.user} />}/> */}
                <Route path="/sign-up" component={Signup} />
                <Route path="/forum" component={Forum} />
                <Route path="/form" component={Form} />
                <Route path="/profile" component={Profile}>
                </Route>
              </>
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