const userController = {
  getUserProfil: (req, res) => {
    res.render("userProfil", { showNavbar: true });
  },
};

module.exports = userController;
