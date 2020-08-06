const { Service } = require("feathers-mongoose");

exports.Users = class Users extends Service {
  async find(params) {
    console.log(params);

    const extraInfo = {
      name: "deku",
      overrated: true,
    };
    return super.find();
  }
};
