const express = require('express')
const route = express.Router()
const product = require('./api/product.api.js')
const users = require('./api/users.api.js')
const cart = require('./api/cart.api.js')
const oauth = require('./api/oauth.api.js')
const payment = require('./api/payment.api.js')
const order = require('./api/order.api.js')

route.use("/v1",product)
route.use("/v1",users)
route.use("/v1",cart)
route.use(oauth)
route.use("/v1",payment)
route.use("/v1",order)

module.exports = route
