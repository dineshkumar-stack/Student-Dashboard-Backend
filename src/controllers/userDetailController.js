const UserDetail = require("../models/UserDetail");

//Get all Task
const getUserDetails = async (req, res) => {
  try {
    const userInfo = await UserDetail.find();
    res.json(userInfo);
  } catch (error) {
    res.status(500).json({ error: "Error fetching user details" });
  }
};

const addUserDetail = async (req, res) => {
  try {
    const addUserInfo = new UserDetail(req.body);
    addUserInfo.save().then((result) => {
      res.status(201).json({ message: "user details added" });
    });
  } catch (error) {
    res.status(500).json({ error: "ERROR updated user data" });
  }
};

const alterUserDetail = async (req, res) => {
  const id = req.params.id;
  const userInfoModifi = req.body;

  try {
    const changeUserInfo = await UserDetail.findByIdAndUpdate(
      id,
      userInfoModifi
    );
    if (!changeUserInfo) {
      return res
        .status(404)
        .json({ error: "X User information not changed X" });
    }
    res.json({message: ' User Information Changed'})
  } catch (error) {
    res
      .status(500)
      .json({ Error: "XXX Unable to edit the user information XXX" });
  }
};

module.exports = { getUserDetails, addUserDetail, alterUserDetail };
