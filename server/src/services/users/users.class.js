const { Service } = require("feathers-mongoose");

const validator = require("email-validator");

exports.Users = class Users extends Service {
  async create(data, params) {
    if (!validator.validate(data.email)) {
      throw new Error("Invalid email");
    }
    return super.create(data, params);
  }
};
