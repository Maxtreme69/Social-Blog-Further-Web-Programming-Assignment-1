import React, { useState } from "react";
import { verifyUser } from "../data/repository";
import { Link, useHistory } from "react-router-dom";
import { useAppContext } from "../AppContext";

function Login() {
    const history = useHistory();
    const context = useAppContext();
    const [fields, setFields ] = useState({ username: "", password: "" });
    const [errorMessage, setErrorMessage] = useState(null);


    // Generic change Handler
    const handleInputChange = (event) => {
        setFields({ ...fields, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const verified = verifyUser(fields.username, fields.password);

        // if verified login the user
        if (verified === true) {
            // props.loginUser(fields.username);
            context.setUsername(fields.username);
            // navigate to the home page.
            history.push("/");
            // console.log("You are verified!!");
            // window.location.href="http://localhost:3000";
            return;
        }

        // Reset password field to blank.
        const temp = { ...fields };
        temp.password = "";
        setFields(temp);

        // Set error message.
        setErrorMessage("Username and / or password invalid, please try again.");
    }

     return (
        <div className="auth-inner">
            <div>
                <h1>Login</h1>
                <hr />
                <div className="row">
                    <div className="col-md-12">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="username" className="control-label">Username</label>
                                <input name="username" id="username" className="form-control"
                                    value={fields.username} onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="control-label">Password</label>
                                <input  name="password" id="password" className="form-control"
                                    value={fields.password} onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btn btn-primary" value="Login" />
                            </div>
                            <p className="forgot-password text-right">
                                Not a member? <> <Link to="/sign-up">Sign up?</Link> </>
                            </p>
                            {errorMessage !== null &&
                                <div className="form-group">
                                    <span className="text-danger">{errorMessage}</span>
                                </div>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
export default Login;



