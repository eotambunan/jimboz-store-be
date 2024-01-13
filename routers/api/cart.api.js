const express = require('express')
const cartRouter = express.Router()
const cartController = require('../../controllers/cart.controller')
const cart = new cartController

cartRouter.get("/cart/:user_id",cart.getCart)
cartRouter.post("/cart",cart.addCart)

module.exports = cartRouter