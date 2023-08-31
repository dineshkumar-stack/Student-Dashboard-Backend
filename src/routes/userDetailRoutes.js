const express = require("express");
const router = express.Router();
const userDetailController = require("../controllers/userDetailController");

router.get("/userdetail", userDetailController.getUserDetails);
router.post("/userdetail", userDetailController.addUserDetail);
router.put("/userdetail", userDetailController.alterUserDetail);

module.exports = router;
