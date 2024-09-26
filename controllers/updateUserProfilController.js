const updateUserProfilController = {
  updatePost: (req, res) => {
    updateProfile(auth.currentUser, {
      displayName: "Jane Q. User",
      photoURL: "https://example.com/jane-q-user/profile.jpg",
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  },
};

module.exports = updateUserProfilController;
