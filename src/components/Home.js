import React from "react";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../AppContext";
import logo from "../images/social-network-logo.png";

export const Home = () => {
    const context = useAppContext();
    const history = useHistory();

    if (!context.username) {
        history.push("/sign-in")
    }
    return (
        <div className="text-center">
             <h1><strong>Gday </strong> {context.username}!</h1>
             <h2 className="display-4">Welcome to the social network!</h2>
             {/* {this.props.username !== null && <h4><strong> {localStorage.getItem('username')}</strong></h4>} */}
             <img src={logo} alt="logo" width="350px" height="350px" />
         </div>
      );
  }
