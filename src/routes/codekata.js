// routes/codekata.js
const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/authMiddleware");
const codekatacontrol = require("../controllers/codekataController");

router.post("/record", verifyToken, codekatacontrol.recordScore);
router.get("/scores", verifyToken, codekatacontrol.getScores);

module.exports = router;
