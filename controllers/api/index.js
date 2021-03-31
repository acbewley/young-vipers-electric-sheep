const router = require("express").Router();
const userRoutes = require("./userRoutes");
const dreamRoutes = require('./dreamRoutes');
const { User } = require("../../models");
const { Dream } = require("../../models");

router.use("/users", userRoutes);
router.use("/dreams", dreamRoutes);

module.exports = router;


