const Task = require("../models/Task");

getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Error fetching tasks" });
  }
};

addTaskData = async (req, res) => {
  try {
    //prepare on obj to DB
    const addTask = new Task(req.body);
    //storing the new obj DB
    addTask.save().then((result) => {
      res.status(201).json({ message: "----- Task Created ------" });
    });
  } catch (erro) {
    res.status(500).json({ error: "XXXX Error ADDED tasks XXXXX" });
  }
};

deleteTask = async (req, res) => {
  const _id = res.params.id;

  Task.findByIdAndDelete(_id)
    .then((deleteTask) => {
      if (!deleteTask) {
        return res.status(404).json({ error: "Task not found" });
      }
      res.status(204).json({ message: "Task delected successfully" });
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal server error" });
    });
};

module.exports = { getAllTasks, addTaskData, deleteTask };
