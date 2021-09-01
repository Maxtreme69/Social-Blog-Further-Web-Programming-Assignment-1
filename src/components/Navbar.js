import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContext";

class Navbar extends React.Component {

  state = {
    forum: 'forum',
    profile: 'profile'
  }

 

  render() {

  return (
    <AppContext>
      {context => (
 <nav className="navbar navbar-expand-lg navbar-light fixed-top">
 <div className="container">
   <Link className="navbar-brand" to={"/"}><strong>Blog</strong></Link>
           <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
             <ul className="navbar-nav ml-auto">
                {
                 context.username
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
                   context.username 
                   ?
                   <>
                     <Link onClick={context.logoutUser} to="/sign-in">Logout</Link>
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
      )}
    </AppContext>
    )
  }
}

export default Navbar;

