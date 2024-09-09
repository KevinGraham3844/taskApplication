const { test, after, beforeEach, describe } = require('node:test')
const assert = require('node:assert/strict')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const helper = require('./test_helper');

const User = require('../models/user');

const api = supertest(app)

describe('when there are two users saved to the test database', () => {
    beforeEach(async () => {
        await User.deleteMany({});
        await User.insertMany(helper.initialUsers);
    });

    test('users are returned as json', async () => {
        await api
            .get('/api/users')
            .expect(200)
            .expect('Content-Type', /application\/json/)
    });
    
    test('there are two users', async () => {
        const response = await api.get('/api/users');
        //console.log(response);
        assert.strictEqual(response.body.length, helper.initialUsers.length);
    });

    
    test('succeeds with valid credentials', async () => {
        const newUser = {
            username: 'newUser',
            name: 'John',
            password: 'newUserTest'
        }

        await api
            .post('/api/users')
            .send(newUser)
            .expect(201)
            .expect('Content-Type', /application\/json/);
        
        const usersAtEnd = await helper.usersInDb();
        assert.strictEqual(usersAtEnd.length, helper.initialUsers.length + 1)

        const userNames = usersAtEnd.map(user => user.username);
        assert(userNames.includes('newUser'));
    })

    test('fails to save in DB when missing min username requirements', async () => {
        const newUser = {
            username: 'Jo',
            name: 'Joanne',
            password: 'newUserTest'
        }

        await api
            .post('/api/users')
            .send(newUser)
            .expect(400)

        const usersAtEnd = await helper.usersInDb();
        assert.strictEqual(usersAtEnd.length, helper.initialUsers.length);
    })

    test('fails to save in DB when missing min password requirements', async () => {
        const newUser = {
            username: 'Jo384',
            name: 'Joanne',
            password: 'ne'
        }

        await api
            .post('/api/users')
            .send(newUser)
            .expect(401)

        const usersAtEnd = await helper.usersInDb();
        assert.strictEqual(usersAtEnd.length, helper.initialUsers.length);
    })

    test('fails to save in DB when username already taken', async () => {
        const newUser = {
            username: 'cghahremani',
            name: 'Joanne',
            password: 'newuserTest'
        }

        await api
            .post('/api/users')
            .send(newUser)
            .expect(400)

        const usersAtEnd = await helper.usersInDb();
        assert.strictEqual(usersAtEnd.length, helper.initialUsers.length);
    })

});



after(async () => {
    await mongoose.connection.close();
});

