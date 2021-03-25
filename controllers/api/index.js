const router = require("express").Router();
const userRoutes = require("./userRoutes");
const dreamRoutes = require('./dreamRoutes')

router.use("/users", userRoutes);
router.use("/dreams", dreamRoutes);

module.exports = router;
