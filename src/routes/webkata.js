const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/authMiddleware");
const webkatacontrol = require("../controllers/webkataController");

router.post("/webkatarecord", verifyToken, webkatacontrol.recordWebkataScore);
router.get("/webkatascores", verifyToken, webkatacontrol.getWebkataScores);

module.exports = router;
