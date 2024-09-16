const bcrypt = require('bcrypt');
const usersRouter = require('express').Router();
const User = require('../models/user');
const logger = require('../utils/logger');

usersRouter.get('/', async (_req, res) => {
    const users = await User
        .find({})
        .populate('tasks', { title: 1, description: 1, priority: 1, category: 1, dueDate: 1, id: 1 });
    res.json(users);
});

usersRouter.get('/:id', async (req, res) => {
    const user = await User
        .findById(req.params.id)
        .populate('tasks', { title: 1, description: 1, priority: 1, category: 1, dueDate: 1, id: 1 });
    if (user) {
        res.json(user);
    } else {
        res.status(404).end();
    }
});


usersRouter.post('/', async (req, res) => {
    const { username, name, password } = req.body;
    logger.info(req.body)
    if (password.length < 3) {
        return res.status(401).json({
            error: 'password minimum length is 3 characters'
        })
    };
    
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user = new User({
        username,
        name,
        passwordHash
    });

    const savedUser = await user.save();

    res.status(201).json(savedUser);
   
});

module.exports = usersRouter;