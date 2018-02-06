//automatically set to prod on heroku
if (process.env.NODE_ENV === "production") {
	module.exports = require("./prod");
} else {
	module.exports = require("./dev");
}

// 913942807066-16evnapckgld7vtvdqt4ufsaov1vummr.apps.googleusercontent.com
//secret:
//-Ntngke4LoapQjfm_NzGlIcl
