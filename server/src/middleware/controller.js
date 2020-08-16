const createUserModel = require("../models/users.model");

exports.sayHello = (req, res) => {
  res.send("hello");
};

exports.createUser = (app) => async (req, res) => {
  const User = createUserModel(app);
  const { email, password } = req.body;
  const user = new User(req.body);

  try {
    const result = await user.save();
    return res.json({ success: true, result });
  } catch (err) {
    return res.status(400).json({ err });
  }
  return res.json(user);
};
