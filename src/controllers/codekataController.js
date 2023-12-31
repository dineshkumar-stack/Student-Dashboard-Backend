const User = require("../models/User");

const recordScore = async (req, res) => {
  const userId = req.userId;


  const { user } = req;
  const { score } = req.body;

  try {
    const user = await User.findOne({ _id: userId });


    if (!user) {
      throw new Error("User not found");
    }
    const scoreEntry = {
      score: score,
    };
    user.codePracticeScores.push(scoreEntry);

    await user.save();

    res.status(201).json({ message: "Score recorded successfully" });
  } catch (error) {
    console.error("Error recording score:", error);
    res.status(500).json({ message: "Error recording score" });
  }
};

const getScores = async (req, res) => {
  const userId = req.userId;

  try {
    const user = await User.findOne({ _id: userId });


    if (!user) {
      throw new Error("User not found");
    }
    const codePracticeScores = user.codePracticeScores;

    res.status(200).json({ codePracticeScores });
  } catch (error) {
    console.error("Error fetching scores:", error);
    res.status(500).json({ message: "Error fetching scores" });
  }
};

module.exports = { getScores, recordScore };
