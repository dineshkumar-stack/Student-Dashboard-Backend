const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/authMiddleware");

const userDetailController = require("../controllers/userDetailController");

router.get("/userdetail",verifyToken, userDetailController.getUserDetails);
router.post("/userdetail",verifyToken, userDetailController.addUserDetail);
router.put("/userdetail",verifyToken, userDetailController.alterUserDetail);

module.exports = router;
