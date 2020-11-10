const router = require("express").Router();

const { asyncWrapper, requireLogin } = require("../middlewares");

const { create, retrieve, getACoupon } = require("../controllers/coupons");

// create coupon
router.post("/", requireLogin, asyncWrapper(create));

// get a coupon
router.get("/", asyncWrapper(getACoupon));

// retrieve coupon
router.get("/:code", asyncWrapper(retrieve));

module.exports = router;
