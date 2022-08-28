const express = require("express");

const {
  registerView,
  loginView
} = require("../controllers/loginController");

const { protectRoute} = require("../auth/protect");
const { dashboardView } =require("../controllers/dashboardController")
const router = express.Router();

router.get("/register", registerView);
router.get("/login", loginView);
router.get("/dashboard", protectRoute, dashboardView);

module.exports = router;