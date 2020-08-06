// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    // console.log(context.params.user);
    console.log(context.params);
    // console.log(context.data);
    // console.log(context.path);
    return context;
  };
};
