const Joi = require("joi");

const name = Joi.string()
  //   .message("Please Provide a name for this coupon")
  .required();

const code = Joi.number()
  .min(1111)
  .max(9999)
  //   .message("Please Enter a 4 digit coupon code")
  .required();

const amount = Joi.number()
  //   .message("Please Provide a discount amount")
  .required();

const createSchema = Joi.object({
  name,
  code,
  amount,
});

const retriveSchema = Joi.object({
  code,
});

module.exports = {
  createValidator(values) {
    return createSchema.validateAsync(values);
  },
  retriveValidator(values) {
    return retriveSchema.validateAsync(values);
  },
};
