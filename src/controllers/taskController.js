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
    const addTask = new Task(req.body);
    addTask.save().then((result) => {
      res.status(201).json({ message: "----- Task Created ------" });
    });
  } catch (erro) {
    res.status(500).json({ error: "XXXX Error ADDED tasks XXXXX" });
  }
};

deleteTaskById = async (req, res) => {
  const taskId = req.params.id;

  try {
    const deletedTask = await Task.findByIdAndDelete(taskId);
    if (!deletedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting task' });
  }
};

AlterTask = async (req, res) => {
  const id = req.params.id
  const taskReWrite = req.body;

  try {
    const changeTask = await Task.findByIdAndUpdate(id, taskReWrite);
    if (!changeTask) {
      return res.status(404).json({ error: 'Task not Changed' });
    }
    res.json({ message: 'Task changed as you mentioned' });

  } catch (error) {
    res.status(500).json({ error: 'Error Re-Write task' });
  }
}

findByIdTask = async (req, res) => {
  const id = req.params.id
  const findId = req.body;

  try {
    const TaskValue = await Task.findById(id, findId);
    if (!TaskValue) {
      return res.status(404).json({ error: "Task not found please check ID" })
    }
    res.json(TaskValue)

  } catch (error) {
    res.status(500).json({ error: 'Error on connection' })

  }
}

module.exports = { getAllTasks, addTaskData, deleteTaskById, AlterTask, findByIdTask };
