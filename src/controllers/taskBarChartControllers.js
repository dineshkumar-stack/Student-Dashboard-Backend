const TaskBar = require("../models/TaskBarChart");

//Get all Task bar details
getAllTaskBar = async (req, res) => {
  try {
    const taskBarData = await TaskBar.find();
    res.json(taskBarData);
  } catch (error) {
    res.status(500).json({ error: "Error Fetching Task Bar" });
  }
};

//Task bar data added
addTaskBarData = async (req, res) => {
  try {
    const addTaskBarData = new TaskBar(req.body);
    addTaskBarData.save().then((result) => {
      res.status(201).json({ error: "------ ADDED Task bar data ------" });
    });
  } catch (error) {
    res.status(500).json({ error: "XXXX Error while adding datas XXXX" });
  }
};

module.exports = { getAllTaskBar, addTaskBarData };
