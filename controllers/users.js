const User = require('../models/users');

async function handleGetAllUser(req, res) {
  res.setHeader("X-custom-header", "No value");
  const users = await User.find({});
  //   const emails = users.map((user) => user.email);
  return res.json(users);
}

async function handleGetUserById(req, res) {
  const user = await User.findById(req.params.id);
  res.setHeader("X-custom-header", "No value");
  return res.json(user);
}

async function handleDeleteUserById(req, res) {
    const user = await User.findByIdAndDelete(req.params.id);
    res.setHeader("X-custom-header", "No value");
    return res.json({Success: "User Deleted", User: user});
  }

async function handleCreateNewUser(req, res) {
  const body = req.body;
  res.setHeader("X-custom-header", "No value");

  if (!body["first_name"] || !body["last_name"] || !body["email"]) {
    return res.status(404).json({ error: "Enter all the required fields" });
  }

  const newUser = await User.create({
    firstName: body["first_name"],
    lastName: body["last_name"],
    email: body["email"],
  });
  return res.status(201).json({ Success: "User Created", User: newUser });
}

module.exports = {
  handleGetAllUser,
  handleGetUserById,
  handleCreateNewUser,
  handleDeleteUserById
};
