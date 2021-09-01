import React from "react";
import { Link } from "react-router-dom";

// function username(props) {
//     console.log(props);
//     return (
//     <p>{props.username}</p>
//     )
// }

 const UserName = (props) => {
    const username = props.username;
    console.log("NAVBAR: " + username)
  }


class Navbar extends React.Component {

  state = {
    forum: 'forum',
    profile: 'profile'
  }

 

  render() {

  const logoutUser = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("user-email");
    localStorage.removeItem("timestamp");
    console.log("USERNAME PROPS: "+ UserName())
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to={"/"}><strong>Blog</strong></Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul className="navbar-nav ml-auto">
                     {
                      localStorage.getItem("user")
                        ?
                      <>
                        <li>
                          <Link to="/forum">Forum</Link>
                        </li>
                        <li>
                          <Link to="/profile">Profile</Link>
                        </li>
                      </>
                        :
                        <li>

                        </li>
                     }
                    <li className="alignright">
                      {/* <strong>User:</strong> {this.props.username} */}
                      {/* <strong>User:</strong> {localStorage.getItem(USER_KEY)} */}
                    </li>
                    <li>
                      {
                        localStorage.getItem('user') 
                        ?
                        <>
                          <Link onClick={() => logoutUser()} to="/sign-in">Logout</Link>
                        </>
                        :
                        <>
                          <Link to="/sign-in">Login</Link>
                        </>
                      }
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
    )
  }
}

export default Navbar;

