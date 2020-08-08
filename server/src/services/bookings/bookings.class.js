const { Service } = require("feathers-mongoose");

exports.Bookings = class Bookings extends Service {
  async create(data, params) {
    const { date } = data;
    const { year, month, day, hour } = date;
    data = { ...data, date: new Date(year, month, day, hour) };

    // return console.log(newData);

    return super.create(data, params);
  }
};
