import React from "react";
import logo from "../images/social-network-logo.png";

class Home extends React.Component {

    state = {
        user: localStorage.getItem('user')
    }

    render() {
        return (
              <div className="text-center">
                   <h1><strong>Gday </strong> {this.state.user}!</h1>
                   <h2 className="display-4">Welcome to the social network!</h2>
                   {/* {this.props.username !== null && <h4><strong> {localStorage.getItem('username')}</strong></h4>} */}
                   <img src={logo} alt="logo" width="350px" height="350px" />
               </div>
            );
        }
    }

export default Home;