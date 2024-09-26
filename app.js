// === IMPORTS === //
// npm
const express = require("express");
const session = require("express-session");
const MemoryStore = require("memorystore")(session); // Optionnel : MemoryStore sans fuite

require("dotenv").config();

// local
const router = require("./router.js");
const setUserDataGlobal = require("./middleware/setUserDataGlobal.js");

// === CONFIGURATION === //
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    store: new MemoryStore({
      checkPeriod: 86400000,
    }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: true,
      // secure: process.env.COOKIE_SECURE === "production",
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);
app.use(setUserDataGlobal);
app.use(router);

// === LISTENER === //
app.listen(process.env.PORT, () => {
  console.log(`La broche tourne sur le port ${process.env.PORT}`);
});
