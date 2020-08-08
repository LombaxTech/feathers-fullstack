const { Service } = require("feathers-mongoose");
const stripe = require("stripe")("sk_test_KxIPs4lg5Yrc8yey28svCIuJ00RTuBa9uJ");

exports.Payments = class Payments extends Service {
  async create(data, params) {
    // const { amount } = data;

    // // Create a PaymentIntent with the order amount and currency
    // const paymentIntent = await stripe.paymentIntents.create({
    //   amount,
    //   currency: "gbp",
    // });

    // return {
    //   clientSecret: paymentIntent.client_secret,
    // };

    return data;

    // return super.create(data, params);
  }
};
