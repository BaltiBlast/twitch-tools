// === IMPORTS === //
// npm
const { signInWithEmailAndPassword } = require("firebase/auth");

// local
const { auth } = require("../services/config.js");

const loginController = {
  // === POST === //
  // login
  loginPost: async (req, res) => {
    const { email, password } = req.body;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      req.session.user = user;
      res.redirect("/");
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  },

  // == GET == //
  // login
  loginGet: (req, res) => {
    res.render("login", { showNavbar: false });
  },

  logoutGet: (req, res) => {
    req.session.destroy();
    res.redirect("/login");
  },
};

// === EXPORTS === //
module.exports = loginController;
