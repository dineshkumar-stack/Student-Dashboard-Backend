const User = require("../models/User");

const getUserDetails = async (req, res) => {
  const userId = req.userId;

  try {
    const user = await User.findOne({ _id: userId });
    res.json(user);

    if (!user) {
      throw new Error("User not found");
    }
    const userDetails = user.userDetails;
    res.status(200).json({ userDetails });

  } catch (error) {
    console.error("Error fetching scores:", error);

    res.status(500).json({ error: "Error fetching user details" });
  }
};

const addUserDetail = async (req, res) => {
  const userId = req.userId;

  const { user } = req;
  const { name, phone, email, batch, Qualification, yearOfPass, yearOfExperience, noticePeriod, gifhud, resume, portfolioURL } = req.body;

  try {
    const user = await User.findOne({ _id: userId });

    if (!user) {
      throw new Error("User not found");
    }

    const userProfile = {
      name: name,
      phone: phone,
      email: email,
      batch: batch,
      Qualification: Qualification,
      yearOfPass: yearOfPass,
      yearOfExperience: yearOfExperience,
      noticePeriod: noticePeriod,
      gifhud: gifhud,
      resume: resume,
      portfolioURL: portfolioURL,
    };

    user.userDetails.push(userProfile);

    await user.save();

    res.status(201).json({ message: "user data recorded successfully" });

  } catch (error) {
    res.status(500).json({ error: "ERROR updated user data" });
  }
};

const alterUserDetail = async (req, res) => {
  const { name, phone, email, batch, Qualification, yearOfPass, yearOfExperience, noticePeriod, gifhud, resume, portfolioURL } = req.body;
  const userId = req.userId;
  const { user } = req;


  try {

    const user = await User.findOne({ _id: userId });
    if (!user) {
      throw new Error("User not found");
    }

    const mofiUser = user.userDetails

    const updatedUser = await mofiUser.findOneAndUpdate(
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
