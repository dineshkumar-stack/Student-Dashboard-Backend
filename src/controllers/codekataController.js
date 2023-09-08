const User = require("../models/User");

// Record a code practice score for the authenticated user
const recordScore = async (req, res) => {
  const userId = req.userId;

  console.log(userId);

  const { user } = req;
  const { score } = req.body;

  try {
    const user = await User.findOne({ _id: userId });

    console.log(user);

    if (!user) {
      throw new Error("User not found");
    }
    // Create a new score object
    const scoreEntry = {
      score: score,
    };
    console.log(scoreEntry);
    user.codePracticeScores.push(scoreEntry);

    await user.save();

    res.status(201).json({ message: "Score recorded successfully" });
  } catch (error) {
    console.error("Error recording score:", error);
    res.status(500).json({ message: "Error recording score" });
  }
};

// Retrieve code practice score history for the authenticated user
const getScores = async (req, res) => {
  const userId = req.userId;

  try {
    const user = await User.findOne({ _id: userId });

    console.log(user);

    if (!user) {
      throw new Error("User not found");
    }
    // Retrieve the user's codePracticeScores array
    const codePracticeScores = user.codePracticeScores;

    res.status(200).json({ codePracticeScores });
  } catch (error) {
    console.error("Error fetching scores:", error);
    res.status(500).json({ message: "Error fetching scores" });
  }
};

module.exports = { getScores, recordScore };
