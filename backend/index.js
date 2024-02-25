const users = [];

// register post takes username and password and pushes it to users array
app.post("/register", (req, res) => {
  const { username, password } = req.body;

  users.push({ username, password });
  res.status(200).json({ message: "Registration successful" });
});

// user login post
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  //   finds user and verifies login
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    res.status(200).json({ message: "login successful" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});
