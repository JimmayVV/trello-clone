const express = require("express");
const path = require("path");
const os = require("os");

const app = express();

// Get the client code
app.use(express.static(path.join(__dirname, "../client/build")));

// Default api request
app.get("/api/getUsername", (req, res) =>
  res.send({ username: os.userInfo().username })
);

// For all other requests, load our app, which will contain the required logic, perhaps with React Router, or 404, or whatever
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

const port = 8080;

// Run server
app.listen(port, () => console.log(`Listening on port ${port}!`));
