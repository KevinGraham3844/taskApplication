const tasksRouter = require('express').Router();
const middleware = require('../utils/middleware');
const logger = require('../utils/logger')
const Task = require('../models/task');

tasksRouter.post('/', middleware.userExtractor, async (req, res) => {
    const body = req.body;
    logger.info('here is the token passed into the post function', req.token);

    const user = req.user;
    const date = new Date(body.dueDate)
    logger.info(date)
    const task = new Task({
        title: body.title,
        description: body.description,
        priority: body.priority,
        category: body.category,
        dueDate: date,
        user: user.id
    });

    logger.info(task)
    const savedTask = await task.save()
    logger.info('this is the id of the saved task', savedTask)
    user.tasks = user.tasks.concat(savedTask._id)
    await user.save()
    res.status(201).json(savedTask)
});

tasksRouter.get('/', async (_req, res) => {
    const tasks = await Task
        .find({}).populate('user', { username: 1, name: 1, id: 1 })
    res.json(tasks);
});

tasksRouter.get('/:user_id', async (req, res) => {
    const tasks = await Task
        .find({}).populate('user', { username: 1, name: 1, id: 1 })
    res.json(tasks.filter(task => task.user._id.toString() === req.params.user_id))
});

tasksRouter.put('/:id', middleware.userExtractor, async (req, res) => {
    
    const body = req.body;
    const user = req.user;
    const foundTask = await Task.findById(req.params.id)

    const changedTask = {
        title: body.title,
        description: body.description,
        priority: body.priority,
        category: body.category,
        dueDate: body.dueDate,
        completed: body.completed,
    };
    logger.info(foundTask.user.toString() === user.id);
    if (foundTask.user.toString() === user.id) {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, changedTask, { new: true});
        res.json(updatedTask);
    } else {
        return res.status(401).json({ error: 'user not authorized to change this task' });
    }
    
})

module.exports = tasksRouter;