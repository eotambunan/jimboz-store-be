const express = require('express')
const orderRouter = express.Router()
const orderController = require('../../controllers/order.controller')
const order = new orderController

orderRouter.get("/order/:user_id",order.getOrder)
orderRouter.post("/order",order.addOrder)
orderRouter.patch("/order",order.setOrderStatus)

module.exports = orderRouter