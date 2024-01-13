const express = require('express')
const users = express.Router()
const UserController = require('../../controllers/users.controller')
const usersController = new UserController

users.post("/users/login",usersController.login)
users.post("/users/registration",usersController.addUser)

module.exports = users