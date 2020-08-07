const { authenticate } = require("@feathersjs/authentication").hooks;

const {
  hashPassword,
  protect,
} = require("@feathersjs/authentication-local").hooks;

const isUser = require("../../hooks/is-user");

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [hashPassword("password")],
    update: [hashPassword("password"), authenticate("jwt")],
    patch: [hashPassword("password")],
    remove: [authenticate("jwt")],
  },

  after: {
    all: [
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect("password"),
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
