import React, { useState } from "react";
import axios from "axios";
import Home from "./Home";

const Register = () => {
  // set up my states for user and password

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameLogin, setUsernameLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogout = () => {
    setLoggedIn(false);
    console.log("successful logout");
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5500/register", {
        username: username,
        password: password,
      });
      console.log("success", response.data);
    } catch (error) {
      console.error("failed", error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5500/login", {
        username: usernameLogin,
        password: passwordLogin,
      });
      console.log("success", response.data);
      setLoggedIn(true);
    } catch (error) {
      console.error("failed", error);
      console.log("Request:", error.config);
      console.log("Response:", error.response);
    }
  };

  return (
    <div className="Register">
      {/* create a form that uses usestate to grab a username and password */}
      {!isLoggedIn ? (
        <>
          <div>
            <h2>Register</h2>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleRegister}>Register</button>
          </div>
          <div>
            <h2>Login</h2>
            <input
              type="text"
              placeholder="Username"
              value={usernameLogin}
              onChange={(e) => setUsernameLogin(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={passwordLogin}
              onChange={(e) => setPasswordLogin(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </>
      ) : (
        <Home />
      )}
    </div>
  );
};

export default Register;
