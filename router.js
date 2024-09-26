// === IMPORTS === //
// npm
const app = require("express");

// local
const loginController = require("./controllers/connexionController.js");
const { loginPost, loginGet, logoutGet } = loginController;

// === CONFIGURATION === //
const router = app.Router();

// === MIDDLWARE === //
function isAuthenticated(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/login");
  }
}

// === GENERAL ROUTES === //
// post
router.post("/login", loginPost);

// get

router.get("/logout", logoutGet);
router.get("/login", loginGet);

// === USER ROUTES === //
router.get("/", isAuthenticated, (req, res) => {
  const uid = req.session.user.uid;
  res.render("home", { uid });
});
router.get("/profil/:userId", isAuthenticated, (req, res) => {
  const email = req.session.user.email;
  const uid = req.session.user.uid;
  res.render("userProfil", { email, uid });
});

router.put("/users/:uid/displayName", async (req, res) => {
  const uid = req.session.user.uid;

  const newDisplayName = req.body.displayName;

  try {
    await admin.auth().updateUser(uid, { displayName: newDisplayName });
    res.status(200).json({ message: "DisplayName mis à jour avec succès" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Une erreur est survenue lors de la mise à jour du displayName" });
  }
});

// === EXPORTS === //
module.exports = router;
