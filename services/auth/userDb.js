// === IMPORTS === //
// npm
const { getAuth } = require("firebase/auth");
const firebaseApp = require("./firebaseConfig.js");

// === CONFIGURATION === //
const auth = getAuth(firebaseApp);

// === EXPORTS === //
module.exports = auth;
