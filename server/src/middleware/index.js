const createUserModel = require("../models/users.model");
const createPostModel = require("../models/post.model");
const { sayHello, createUser } = require("./controller");

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  // Add your custom middleware here. Remember that
  // in Express, the order matters.
  app.get("/testuser", async (req, res) => {
    // res.send(createUserModel(app));

    const User = createUserModel(app);

    let users = await User.find({});
    res.json(users);
  });

  app.get("/testposts", async (req, res) => {
    const Post = createPostModel(app);

    let posts = await Post.find({}).limit(5);
    // res.json(posts.length);
    res.json(posts);
  });

  app.get("/customroute", sayHello);

  app.post("/createuser", createUser(app));
};
