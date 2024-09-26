const homeController = {
  getHome: (req, res) => {
    res.render("home", { showNavbar: true });
  },
};

module.exports = homeController;
