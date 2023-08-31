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
  const { name, phone, email, batch, Qualification, yearOfPass, yearOfExperience, noticePeriod, gifhud, resume, portfolioURL } = req.body;

  try {
    const updatedUser = await UserDetail.findOneAndUpdate(
      {},
      { name, phone, email, batch, Qualification, yearOfPass, yearOfExperience, noticePeriod, gifhud, resume, portfolioURL },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.json(updatedUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};


module.exports = { getUserDetails, addUserDetail, alterUserDetail };
