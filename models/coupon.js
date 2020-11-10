const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const couponSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  code: {
    type: Number,
    required: true,
    unique: true,
    min: 1111,
    max: 9999,
  },
  amount: {
    type: Number,
    required: true,
  },
});

const Coupon = mongoose.model("coupon", couponSchema);

module.exports = Coupon;
