// === IMPORTS === //
// npm
const app = require("express");

// local
const loginController = require("./controllers/connexionController.js");
const { loginPost, loginGet, logoutGet } = loginController;

const userController = require("./controllers/userController.js");
const { getUserProfil } = userController;

const homeController = require("./controllers/homeController.js");
const { getHome } = homeController;

const isAuthenticated = require("./middleware/isAuthenticated.js");

// === CONFIGURATION === //
const router = app.Router();

// === GENERAL ROUTES === //
// post
router.post("/login", loginPost);

// get

router.get("/logout", logoutGet);
router.get("/login", loginGet);

// === USER ROUTES === //
router.get("/", isAuthenticated, getHome);
router.get("/profil/:userId", isAuthenticated, getUserProfil);

// === OVERLAY ROUTES === //
router.get("/overlay", isAuthenticated, (req, res) => {
  res.render("overlay", { showNavbar: true });
});

// === MANAGE ROUTES === //

// === EXPORTS === //
module.exports = router;
