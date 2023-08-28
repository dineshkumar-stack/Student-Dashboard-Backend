const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/tasks', taskController.getAllTasks);
router.post('/tasks', taskController.addTaskData)
router.delete('/tasks/:id', taskController.deleteTaskById)
router.put('/tasks/:id', taskController.AlterTask)
router.get('/tasks/:id', taskController.findByIdTask)

module.exports = router;
