const express = require("express");
const router = express.Router();

const {
  handleGetAllUser,
  handleGetUserById,
  handleCreateNewUser,
  handleDeleteUserById,
} = require("../controllers/users");

router.route("/").get(handleGetAllUser).post(handleCreateNewUser);

router.route("/:id").get(handleGetUserById).delete(handleDeleteUserById);

module.exports = router;
