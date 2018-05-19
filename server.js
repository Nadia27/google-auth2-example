require("dotenv").config();
const express = require("express");
const path = require("path");
const axios = require("axios");
const generateUrlWithParams = require("./utils/coreHelper");

// Start an APP
const app = express();

const PORT = process.env.PORT || 8080;

// Home Page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

// Success Page
app.get("/success", (req, res) => {
  res.sendFile(path.join(__dirname, "views/success.html"));
});

// Error Page
app.get("/error", (req, res) => {
  res.sendFile(path.join(__dirname, "views/error.html"));
});

// Authorize your app with Google Authorization
app.get("/google/authorize", (req, res) => {
  const endpoint = "https://accounts.google.com/o/oauth2/v2/auth?";
  const url = generateUrlWithParams(endpoint, {
    scope: process.env.SCOPE,
    access_type: process.env.ACCESS_TYPE,
    response_type: process.env.RESPONSE_TYPE,
    client_id: process.env.CLIENT_ID,
    redirect_uri: process.env.REDIRECT_URL
  });

  res.redirect(url);
});

// Get a Token for future Google API Request
app.get("/getcode", (req, res) => {
  const code = req.query.code; // get code params from url

  const endpoint = "https://www.googleapis.com/oauth2/v4/token?";

  const url = generateUrlWithParams(endpoint, {
    code,
    client_id: process.env.CLIENT_ID,
    redirect_uri: process.env.REDIRECT_URL,
    client_secret: process.env.CLIENT_SECRET,
    grant_type: process.env.GRANT_TYPE
  });

  axios({
    url,
    method: "POST"
  })
    .then(response => {
      // TODO
      // Save token into your own Database
      console.log("Google Response: ", response.data);
      res.redirect("/success"); // redirect user to a success page
    })
    .catch(err => {
      console.log("Error: ", err);
      res.redirect("/error"); // redirect user to a failure page
    });
});

app.listen(PORT, () => {
  console.log(`Server is starting at port ${PORT}`);
  console.log(`Go to http://localhost:8${PORT} in order to view your app`);
});
