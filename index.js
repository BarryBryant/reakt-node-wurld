// 621338310528-9vk38sk8hp17lkbn72p99btkd1005dnu.apps.googleusercontent.com client id
// IQZoahGdLXgzfBpCVCOvxkFi client secret
const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const app = express(); // generates a new application

passport.use(new GoogleStrategy());

const PORT = process.env.PORT || 5000;
app.listen(PORT);
