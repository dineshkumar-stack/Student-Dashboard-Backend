const express = require("express");
const router = express.Router();
const taskBarController = require("../controllers/taskBarChartControllers");

router.get("/taskbarstatus", taskBarController.getAllTaskBar);
router.post("/taskbarstatus", taskBarController.addTaskBarData);

module.exports = router;
