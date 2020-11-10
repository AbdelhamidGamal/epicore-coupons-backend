const { create } = require("../models/coupon");
const Coupon = require("../models/coupon");

const { createValidator, retriveValidator } = require("../validation/coupons");

module.exports = {
  async create(req, res) {
    await createValidator(req.body);

    const coupon = await Coupon.findOne({ code: req.body.code });
    if (coupon) {
      return res.json({ error: "Code already exists!" });
    }

    new Coupon(req.body).save();

    res.json({ success: req.body });
  },
  async retrieve(req, res) {
    await retriveValidator(req.params);

    const code = await Coupon.findOne({ code: req.params.code });

    if (code) {
      return res.json({ success: code });
    }

    res.json({ error: "Code is invalid" });
  },
  async getACoupon(req, res) {
    const coupon = await Coupon.findOne({});

    if (!coupon) {
      return res.json({ error: "No Coupons Available at the moment" });
    }

    res.json({ success: coupon.code });
  },
};
