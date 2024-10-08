
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const loginRouter = require('express').Router();
const User = require('../models/user');
const config = require('../utils/config');
const logger = require('../utils/logger')

loginRouter.post('/', async (req, res) => {
    logger.info('the test accessed the body', req.body)
    const { username, password } = req.body;
    const user = await User.findOne({ username })
    
    const correctPass = user === null
        ? false
        : await bcrypt.compare(password, user.passwordHash);
    
    if (!(user && correctPass)) {
        return res.status(401).json({
            error: 'invalid username or password'
        });
    };

    const userForToken = {
        username: user.username,
        id: user._id
    };

    const token = jwt.sign(userForToken, config.SECRET);

    res.status(200).send({
        token,
        username: user.username,
        name: user.name,
        id: user.id
    });
});

module.exports = loginRouter