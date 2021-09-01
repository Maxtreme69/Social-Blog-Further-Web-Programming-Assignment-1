import React, { Component } from "react";
import { setUsers, verifyUser } from "../data/repository";
import { createDate } from "../data/date";
import { Link } from "react-router-dom";

const USERS_KEY = "users";

export default class Signup extends Component {

    DATA;
    constructor(props) {
        super(props);

        this.eventUsername = this.eventUsername.bind(this);
        this.eventPassword = this.eventPassword.bind(this);
        this.eventEmail = this.eventEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            password: '',
            email: '',
            timestamp: ''
        }
    }

    // Form Events
    eventUsername(event) {
        this.setState({ username: event.target.value })
        console.log("username: " + USERS_KEY.username + " password: " + USERS_KEY.password);
        console.log(USERS_KEY);
    }

    eventEmail(event) {
        this.setState({ email: event.target.value })
    }

    eventPassword(event) {
        this.setState({ password: event.target.value })
    }

    username = this.setState.username;
    email = this.setState.email;
    password = this.setState.password;
    timestamp = this.setState.timeStamp;

    // Setss username and password
    setUsers(username, password) {
        // Stop if data is already initialized.
        if(localStorage.getItem(USERS_KEY) !== null)
            return;
        // User data is hard-coded, passwords are in plain-text.
        const users = [];
        users.push([
            {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                timestamp: this.state.timestamp
            }
        ])

        // Set data into local storage.
        localStorage.setItem(USERS_KEY, JSON.stringify(users));
    }

    onSubmit(event) {
        event.preventDefault()
        let username = this.state.username;
        let email = this.state.email;
        let password = this.state.password;
        let timestamp =  createDate();
        setUsers(username, email, password, timestamp);
        verifyUser(username, password);
        this.props.history.push('/');
    }

    render() {
        return (
        <div className="auth-inner">
            <form onSubmit={this.onSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>User Name</label>
                    <input type="text" className="form-control" placeholder="Username" value={this.state.username} onChange={this.eventUsername}/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" value={this.state.email} onChange={this.eventEmail}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={this.eventPassword}/>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered? <> <Link to="/sign-in">Sign in?</Link> </>
                </p>
            </form>
        </div>
        );
    }
}