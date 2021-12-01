const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID = "848024213689-8t7cm10co1cfp9ffpp6d2auror2adn7g.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const GITHUB_CLIENT_ID = "c3ca1ea3eb5b1637edb0";
const GITHUB_CLIENT_SECRET = "67aa7d37d19dc355dd7224a8e2b165c45b253205";

const FACEBOOK_APP_ID = "2714126065560964";
const FACEBOOK_APP_SECRET = "c22c8daec32e8c8054c49f866a823c30";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
},
    function (accessToken, refreshToken, profile, done) {
        done(null, profile)
    }
));

passport.use(new GithubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "/auth/github/callback"
},
    function (accessToken, refreshToken, profile, done) {
        done(null, profile)
    }
));


passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "/auth/facebook/callback"
},
    function (accessToken, refreshToken, profile, done) {
        done(null, profile)
    }
));


passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((user, done) => {
    done(null, user)
})