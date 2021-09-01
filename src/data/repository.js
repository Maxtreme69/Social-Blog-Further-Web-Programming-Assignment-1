import { createDate } from "./date"

const USERS_KEY = "users";
export const USER_KEY = "user";
const USER_EMAIL = "user-email";
const USER_TIMESTAMP = "timestamp"

// Initialize local storage "users" with data, if the data is already set this function returns immutable
function initUsers(username, password) {
    // Stop if data is already initialized.
    if(localStorage.getItem(USERS_KEY) !== null)
        return;
    // User data is hard-coded, passwords are in plain-text.
     const users = [
        {
            username: "test",
            email: "test@test.com",
            password: "test123",
            timestamp: createDate()
        },
    //     {
    //         username: "ninja",
    //         password: "ninjaPassword"
    //     }
    ];

    // Set data into local storage.
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function setUsers(username, email, password, timestamp) {

    // User data is hard-coded, passwords are in plain-text.
    const users = [
        {
            username: username,
            password: password,
            email: email,
            timestamp: timestamp
        }
    ];

    var localStorageUserArray = users;
    localStorageUserArray.push(JSON.parse(localStorage.getItem('users')));
    localStorage.setItem('users', JSON.stringify(users));

    // // Set data into local storage.
    // localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function getUsers() {
    // Extract user data from local storage.
    const data = localStorage.getItem(USERS_KEY);

    // Convert data to objects.
    return JSON.parse(data)
}

function setUser(username) {
    localStorage.setItem(USER_KEY, username);
}

function setUserEmail(email) {
    localStorage.setItem(USER_EMAIL, email);
}

function setTimestamp (date) {
    localStorage.setItem(USER_TIMESTAMP, date);
}

function getUser() {
    return localStorage.getItem(USER_KEY);
}

const removeUser = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("user-email");
    localStorage.removeItem("timestamp");
    window.location.href="http://localhost:3000/profile"; 
}

function removeUserAccount() {
    let user = getUser();
    let users = getUsers();
    for ( user of users) {
        if(user === users.username)
        {
            localStorage.removeItem(USERS_KEY);
            return true;
        }
    }
    return false;
}

// NOTE: In this example the login is also persistent as it is stored in local storage.
function verifyUser(username, password) {
    const users = getUsers();
    for (const user of users) {
        if(username === user.username && password === user.password)
        {
            setUser(username);
            setUserEmail(user.email);
            setTimestamp(user.timestamp)
            return true;
        }
    }
    return false;
}

export {
    initUsers,
    verifyUser,
    getUser,
    removeUser,
    removeUserAccount,
    setUsers
}
