const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addFriend,
  removeFriend,
  updateUser,
} = require("../../controllers/userController");

//   /api/users
router.route("/").get(getUsers).post(createUser);
//   /api/users/:UserId
router.route("/:userId")
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);
//   /api/users/:UserId/friends/:friendId
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;
