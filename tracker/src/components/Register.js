import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  // set up my states for user and password

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5500/register", {
        username: username,
        password: password,
      });
      console.log("success", response.date);
    } catch (error) {
      console.error("failed", error);
    }
  };

  return (
    <div className="Register">
      {/* create a form that uses usestate to grab a username and password */}
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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <button onClick={handleLogin}>Login</button> */}
      </div>
    </div>
  );
};

export default Register;
