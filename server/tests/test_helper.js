const User = require('../models/user');

const initialUsers = [
    {
        username: 'cghahremani',
        name: 'Cameron',
        password: 'adminTest'
    },
    {
        username: 'lpow19',
        name: 'Lauralie',
        password: 'userTest'
    }
]

const usersInDb = async () => {
    const users = await User.find({});
    return users.map(user => user.toJSON());
}

module.exports = {
    initialUsers,
    usersInDb
}