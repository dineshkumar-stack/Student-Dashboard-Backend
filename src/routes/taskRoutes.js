const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/tasks', taskController.getAllTasks);
router.post('/tasks', taskController.addTaskData)
router.delete('/tasks/:id', taskController.deleteTask)

module.exports = router;