var express = require("express");
var router = express.Router();
var {
  GetAllUsers,
  AddNewUser,
  UpdateUser,
  DeleteUser,
} = require("../controllers/UserController");
// Get All Users
router.get("/", GetAllUsers);
// Add new User
router.post("/add", AddNewUser);
//Update User by ID
router.put("/edit", UpdateUser);
//Delete User by ID
router.delete("/delete", DeleteUser);
module.exports = router;
