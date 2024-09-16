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

module.exports = tasksRouter;